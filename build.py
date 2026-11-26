"""Build the standalone viewer and the Obsidian release assets without network access."""

import json
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


def build():
    plugin_id = json.loads(read("manifest.json"))["id"]
    stage = DIST / plugin_id
    stage.mkdir(parents=True, exist_ok=True)

    libraries = "\n".join(read("vendor/" + name) for name in ("mermaid-parsers.js", "dagre.min.js"))
    modules = ("flow-layout.js", "hierarchy.js", "steps.js", "import.js")
    renderer = "\n".join(read("src/" + name) for name in modules)
    viewer = read("src/viewer.html").replace("/* MERMAID_GRAMMARS */", libraries)
    viewer = viewer.replace("/* MERMAID_IMPORT */", renderer)
    example = json.dumps(read("examples/request-review.mmd").strip(), ensure_ascii=False).replace("<", "\\u003c")
    page = read("src/document.html").replace("{{EXAMPLE}}", example).replace("<!-- VIEWER -->", viewer)
    license_text = read("LICENSE")
    page = page.replace("<!-- PROJECT_LICENSE -->", "<!--\n" + license_text + "-->")
    (DIST / "viewer.html").write_bytes(page.encode("utf-8"))

    plugin = read("src/plugin.js").replace("/* SOURCE_GEOMETRY */", read("src/source-geometry.js"))
    plugin = plugin.replace("/* VIEWER_DOCUMENT */ null", json.dumps(page, ensure_ascii=False))
    assets = {
        "main.js": "/*!\n" + license_text + "*/\n" + plugin,
        "manifest.json": read("manifest.json"),
        "styles.css": read("src/plugin.css"),
        "LICENSE": license_text,
        "THIRD-PARTY-LICENSE.txt": (
            "Mermaid\n" + read("vendor/mermaid-LICENSE.txt") +
            "\nDagre and graphlib\n" + read("vendor/dagre-LICENSE.txt")
        ),
    }
    bundle = DIST / "mermaid-flowchart-navigator.zip"
    with ZipFile(bundle, "w") as archive:
        for name, content in assets.items():
            data = content.encode("utf-8")
            (stage / name).write_bytes(data)
            # Fixed metadata makes release archives reproducible from the same source.
            entry = ZipInfo(f"{plugin_id}/{name}")
            entry.create_system = 3
            entry.external_attr = 0o100644 << 16
            archive.writestr(entry, data, compress_type=ZIP_DEFLATED)


if __name__ == "__main__":
    build()
