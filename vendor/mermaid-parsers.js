/*! Mermaid 11.12.0. Generated Jison parsers distributed by mermaid.
The MIT License (MIT)

Copyright (c) 2014 - 2022 Knut Sveidqvist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
const mermaidGrammars = (() => {
const __name = fn => fn;
const flow = (function() {
  var o = /* @__PURE__ */ __name(function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v) ;
    return o2;
  }, "o"), $V0 = [1, 4], $V1 = [1, 3], $V2 = [1, 5], $V3 = [1, 8, 9, 10, 11, 27, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], $V4 = [2, 2], $V5 = [1, 13], $V6 = [1, 14], $V7 = [1, 15], $V8 = [1, 16], $V9 = [1, 23], $Va = [1, 25], $Vb = [1, 26], $Vc = [1, 27], $Vd = [1, 49], $Ve = [1, 48], $Vf = [1, 29], $Vg = [1, 30], $Vh = [1, 31], $Vi = [1, 32], $Vj = [1, 33], $Vk = [1, 44], $Vl = [1, 46], $Vm = [1, 42], $Vn = [1, 47], $Vo = [1, 43], $Vp = [1, 50], $Vq = [1, 45], $Vr = [1, 51], $Vs = [1, 52], $Vt = [1, 34], $Vu = [1, 35], $Vv = [1, 36], $Vw = [1, 37], $Vx = [1, 57], $Vy = [1, 8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], $Vz = [1, 61], $VA = [1, 60], $VB = [1, 62], $VC = [8, 9, 11, 75, 77, 78], $VD = [1, 78], $VE = [1, 91], $VF = [1, 96], $VG = [1, 95], $VH = [1, 92], $VI = [1, 88], $VJ = [1, 94], $VK = [1, 90], $VL = [1, 97], $VM = [1, 93], $VN = [1, 98], $VO = [1, 89], $VP = [8, 9, 10, 11, 40, 75, 77, 78], $VQ = [8, 9, 10, 11, 40, 46, 75, 77, 78], $VR = [8, 9, 10, 11, 29, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 65, 67, 68, 70, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116], $VS = [8, 9, 11, 44, 60, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116], $VT = [44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], $VU = [1, 121], $VV = [1, 122], $VW = [1, 124], $VX = [1, 123], $VY = [44, 60, 62, 74, 89, 102, 105, 106, 109, 111, 114, 115, 116], $VZ = [1, 133], $V_ = [1, 147], $V$ = [1, 148], $V01 = [1, 149], $V11 = [1, 150], $V21 = [1, 135], $V31 = [1, 137], $V41 = [1, 141], $V51 = [1, 142], $V61 = [1, 143], $V71 = [1, 144], $V81 = [1, 145], $V91 = [1, 146], $Va1 = [1, 151], $Vb1 = [1, 152], $Vc1 = [1, 131], $Vd1 = [1, 132], $Ve1 = [1, 139], $Vf1 = [1, 134], $Vg1 = [1, 138], $Vh1 = [1, 136], $Vi1 = [8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], $Vj1 = [1, 154], $Vk1 = [1, 156], $Vl1 = [8, 9, 11], $Vm1 = [8, 9, 10, 11, 14, 44, 60, 89, 105, 106, 109, 111, 114, 115, 116], $Vn1 = [1, 176], $Vo1 = [1, 172], $Vp1 = [1, 173], $Vq1 = [1, 177], $Vr1 = [1, 174], $Vs1 = [1, 175], $Vt1 = [77, 116, 119], $Vu1 = [8, 9, 10, 11, 12, 14, 27, 29, 32, 44, 60, 75, 84, 85, 86, 87, 88, 89, 90, 105, 109, 111, 114, 115, 116], $Vv1 = [10, 106], $Vw1 = [31, 49, 51, 53, 55, 57, 62, 64, 66, 67, 69, 71, 116, 117, 118], $Vx1 = [1, 247], $Vy1 = [1, 245], $Vz1 = [1, 249], $VA1 = [1, 243], $VB1 = [1, 244], $VC1 = [1, 246], $VD1 = [1, 248], $VE1 = [1, 250], $VF1 = [1, 268], $VG1 = [8, 9, 11, 106], $VH1 = [8, 9, 10, 11, 60, 84, 105, 106, 109, 110, 111, 112];
  var parser2 = {
    trace: /* @__PURE__ */ __name(function trace() {
    }, "trace"),
    yy: {},
    symbols_: { "error": 2, "start": 3, "graphConfig": 4, "document": 5, "line": 6, "statement": 7, "SEMI": 8, "NEWLINE": 9, "SPACE": 10, "EOF": 11, "GRAPH": 12, "NODIR": 13, "DIR": 14, "FirstStmtSeparator": 15, "ending": 16, "endToken": 17, "spaceList": 18, "spaceListNewline": 19, "vertexStatement": 20, "separator": 21, "styleStatement": 22, "linkStyleStatement": 23, "classDefStatement": 24, "classStatement": 25, "clickStatement": 26, "subgraph": 27, "textNoTags": 28, "SQS": 29, "text": 30, "SQE": 31, "end": 32, "direction": 33, "acc_title": 34, "acc_title_value": 35, "acc_descr": 36, "acc_descr_value": 37, "acc_descr_multiline_value": 38, "shapeData": 39, "SHAPE_DATA": 40, "link": 41, "node": 42, "styledVertex": 43, "AMP": 44, "vertex": 45, "STYLE_SEPARATOR": 46, "idString": 47, "DOUBLECIRCLESTART": 48, "DOUBLECIRCLEEND": 49, "PS": 50, "PE": 51, "(-": 52, "-)": 53, "STADIUMSTART": 54, "STADIUMEND": 55, "SUBROUTINESTART": 56, "SUBROUTINEEND": 57, "VERTEX_WITH_PROPS_START": 58, "NODE_STRING[field]": 59, "COLON": 60, "NODE_STRING[value]": 61, "PIPE": 62, "CYLINDERSTART": 63, "CYLINDEREND": 64, "DIAMOND_START": 65, "DIAMOND_STOP": 66, "TAGEND": 67, "TRAPSTART": 68, "TRAPEND": 69, "INVTRAPSTART": 70, "INVTRAPEND": 71, "linkStatement": 72, "arrowText": 73, "TESTSTR": 74, "START_LINK": 75, "edgeText": 76, "LINK": 77, "LINK_ID": 78, "edgeTextToken": 79, "STR": 80, "MD_STR": 81, "textToken": 82, "keywords": 83, "STYLE": 84, "LINKSTYLE": 85, "CLASSDEF": 86, "CLASS": 87, "CLICK": 88, "DOWN": 89, "UP": 90, "textNoTagsToken": 91, "stylesOpt": 92, "idString[vertex]": 93, "idString[class]": 94, "CALLBACKNAME": 95, "CALLBACKARGS": 96, "HREF": 97, "LINK_TARGET": 98, "STR[link]": 99, "STR[tooltip]": 100, "alphaNum": 101, "DEFAULT": 102, "numList": 103, "INTERPOLATE": 104, "NUM": 105, "COMMA": 106, "style": 107, "styleComponent": 108, "NODE_STRING": 109, "UNIT": 110, "BRKT": 111, "PCT": 112, "idStringToken": 113, "MINUS": 114, "MULT": 115, "UNICODE_TEXT": 116, "TEXT": 117, "TAGSTART": 118, "EDGE_TEXT": 119, "alphaNumToken": 120, "direction_tb": 121, "direction_bt": 122, "direction_rl": 123, "direction_lr": 124, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 8: "SEMI", 9: "NEWLINE", 10: "SPACE", 11: "EOF", 12: "GRAPH", 13: "NODIR", 14: "DIR", 27: "subgraph", 29: "SQS", 31: "SQE", 32: "end", 34: "acc_title", 35: "acc_title_value", 36: "acc_descr", 37: "acc_descr_value", 38: "acc_descr_multiline_value", 40: "SHAPE_DATA", 44: "AMP", 46: "STYLE_SEPARATOR", 48: "DOUBLECIRCLESTART", 49: "DOUBLECIRCLEEND", 50: "PS", 51: "PE", 52: "(-", 53: "-)", 54: "STADIUMSTART", 55: "STADIUMEND", 56: "SUBROUTINESTART", 57: "SUBROUTINEEND", 58: "VERTEX_WITH_PROPS_START", 59: "NODE_STRING[field]", 60: "COLON", 61: "NODE_STRING[value]", 62: "PIPE", 63: "CYLINDERSTART", 64: "CYLINDEREND", 65: "DIAMOND_START", 66: "DIAMOND_STOP", 67: "TAGEND", 68: "TRAPSTART", 69: "TRAPEND", 70: "INVTRAPSTART", 71: "INVTRAPEND", 74: "TESTSTR", 75: "START_LINK", 77: "LINK", 78: "LINK_ID", 80: "STR", 81: "MD_STR", 84: "STYLE", 85: "LINKSTYLE", 86: "CLASSDEF", 87: "CLASS", 88: "CLICK", 89: "DOWN", 90: "UP", 93: "idString[vertex]", 94: "idString[class]", 95: "CALLBACKNAME", 96: "CALLBACKARGS", 97: "HREF", 98: "LINK_TARGET", 99: "STR[link]", 100: "STR[tooltip]", 102: "DEFAULT", 104: "INTERPOLATE", 105: "NUM", 106: "COMMA", 109: "NODE_STRING", 110: "UNIT", 111: "BRKT", 112: "PCT", 114: "MINUS", 115: "MULT", 116: "UNICODE_TEXT", 117: "TEXT", 118: "TAGSTART", 119: "EDGE_TEXT", 121: "direction_tb", 122: "direction_bt", 123: "direction_rl", 124: "direction_lr" },
    productions_: [0, [3, 2], [5, 0], [5, 2], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [4, 2], [4, 2], [4, 2], [4, 3], [16, 2], [16, 1], [17, 1], [17, 1], [17, 1], [15, 1], [15, 1], [15, 2], [19, 2], [19, 2], [19, 1], [19, 1], [18, 2], [18, 1], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 9], [7, 6], [7, 4], [7, 1], [7, 2], [7, 2], [7, 1], [21, 1], [21, 1], [21, 1], [39, 2], [39, 1], [20, 4], [20, 3], [20, 4], [20, 2], [20, 2], [20, 1], [42, 1], [42, 6], [42, 5], [43, 1], [43, 3], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 8], [45, 4], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 4], [45, 4], [45, 1], [41, 2], [41, 3], [41, 3], [41, 1], [41, 3], [41, 4], [76, 1], [76, 2], [76, 1], [76, 1], [72, 1], [72, 2], [73, 3], [30, 1], [30, 2], [30, 1], [30, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [28, 1], [28, 2], [28, 1], [28, 1], [24, 5], [25, 5], [26, 2], [26, 4], [26, 3], [26, 5], [26, 3], [26, 5], [26, 5], [26, 7], [26, 2], [26, 4], [26, 2], [26, 4], [26, 4], [26, 6], [22, 5], [23, 5], [23, 5], [23, 9], [23, 9], [23, 7], [23, 7], [103, 1], [103, 3], [92, 1], [92, 3], [107, 1], [107, 2], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [82, 1], [82, 1], [82, 1], [82, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [79, 1], [79, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [47, 1], [47, 2], [101, 1], [101, 2], [33, 1], [33, 1], [33, 1], [33, 1]],
    performAction: /* @__PURE__ */ __name(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 2:
          this.$ = [];
          break;
        case 3:
          if (!Array.isArray($$[$0]) || $$[$0].length > 0) {
            $$[$0 - 1].push($$[$0]);
          }
          this.$ = $$[$0 - 1];
          break;
        case 4:
        case 183:
          this.$ = $$[$0];
          break;
        case 11:
          yy.setDirection("TB");
          this.$ = "TB";
          break;
        case 12:
          yy.setDirection($$[$0 - 1]);
          this.$ = $$[$0 - 1];
          break;
        case 27:
          this.$ = $$[$0 - 1].nodes;
          break;
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
          this.$ = [];
          break;
        case 33:
          this.$ = yy.addSubGraph($$[$0 - 6], $$[$0 - 1], $$[$0 - 4]);
          break;
        case 34:
          this.$ = yy.addSubGraph($$[$0 - 3], $$[$0 - 1], $$[$0 - 3]);
          break;
        case 35:
          this.$ = yy.addSubGraph(void 0, $$[$0 - 1], void 0);
          break;
        case 37:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 38:
        case 39:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 43:
          this.$ = $$[$0 - 1] + $$[$0];
          break;
        case 44:
          this.$ = $$[$0];
          break;
        case 45:
          yy.addVertex($$[$0 - 1][$$[$0 - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, $$[$0]);
          yy.addLink($$[$0 - 3].stmt, $$[$0 - 1], $$[$0 - 2]);
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1].concat($$[$0 - 3].nodes) };
          break;
        case 46:
          yy.addLink($$[$0 - 2].stmt, $$[$0], $$[$0 - 1]);
          this.$ = { stmt: $$[$0], nodes: $$[$0].concat($$[$0 - 2].nodes) };
          break;
        case 47:
          yy.addLink($$[$0 - 3].stmt, $$[$0 - 1], $$[$0 - 2]);
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1].concat($$[$0 - 3].nodes) };
          break;
        case 48:
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1] };
          break;
        case 49:
          yy.addVertex($$[$0 - 1][$$[$0 - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, $$[$0]);
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1], shapeData: $$[$0] };
          break;
        case 50:
          this.$ = { stmt: $$[$0], nodes: $$[$0] };
          break;
        case 51:
          this.$ = [$$[$0]];
          break;
        case 52:
          yy.addVertex($$[$0 - 5][$$[$0 - 5].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, $$[$0 - 4]);
          this.$ = $$[$0 - 5].concat($$[$0]);
          break;
        case 53:
          this.$ = $$[$0 - 4].concat($$[$0]);
          break;
        case 54:
          this.$ = $$[$0];
          break;
        case 55:
          this.$ = $$[$0 - 2];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 56:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "square");
          break;
        case 57:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "doublecircle");
          break;
        case 58:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "circle");
          break;
        case 59:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "ellipse");
          break;
        case 60:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "stadium");
          break;
        case 61:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "subroutine");
          break;
        case 62:
          this.$ = $$[$0 - 7];
          yy.addVertex($$[$0 - 7], $$[$0 - 1], "rect", void 0, void 0, void 0, Object.fromEntries([[$$[$0 - 5], $$[$0 - 3]]]));
          break;
        case 63:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "cylinder");
          break;
        case 64:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "round");
          break;
        case 65:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "diamond");
          break;
        case 66:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "hexagon");
          break;
        case 67:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "odd");
          break;
        case 68:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "trapezoid");
          break;
        case 69:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "inv_trapezoid");
          break;
        case 70:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_right");
          break;
        case 71:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_left");
          break;
        case 72:
          this.$ = $$[$0];
          yy.addVertex($$[$0]);
          break;
        case 73:
          $$[$0 - 1].text = $$[$0];
          this.$ = $$[$0 - 1];
          break;
        case 74:
        case 75:
          $$[$0 - 2].text = $$[$0 - 1];
          this.$ = $$[$0 - 2];
          break;
        case 76:
          this.$ = $$[$0];
          break;
        case 77:
          var inf = yy.destructLink($$[$0], $$[$0 - 2]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length, "text": $$[$0 - 1] };
          break;
        case 78:
          var inf = yy.destructLink($$[$0], $$[$0 - 2]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length, "text": $$[$0 - 1], "id": $$[$0 - 3] };
          break;
        case 79:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 80:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 81:
          this.$ = { text: $$[$0], type: "string" };
          break;
        case 82:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 83:
          var inf = yy.destructLink($$[$0]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length };
          break;
        case 84:
          var inf = yy.destructLink($$[$0]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length, "id": $$[$0 - 1] };
          break;
        case 85:
          this.$ = $$[$0 - 1];
          break;
        case 86:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 87:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 88:
          this.$ = { text: $$[$0], type: "string" };
          break;
        case 89:
        case 104:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 101:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 102:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 103:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 105:
          this.$ = $$[$0 - 4];
          yy.addClass($$[$0 - 2], $$[$0]);
          break;
        case 106:
          this.$ = $$[$0 - 4];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 107:
        case 115:
          this.$ = $$[$0 - 1];
          yy.setClickEvent($$[$0 - 1], $$[$0]);
          break;
        case 108:
        case 116:
          this.$ = $$[$0 - 3];
          yy.setClickEvent($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 109:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0 - 1], $$[$0]);
          break;
        case 110:
          this.$ = $$[$0 - 4];
          yy.setClickEvent($$[$0 - 4], $$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 4], $$[$0]);
          break;
        case 111:
          this.$ = $$[$0 - 2];
          yy.setLink($$[$0 - 2], $$[$0]);
          break;
        case 112:
          this.$ = $$[$0 - 4];
          yy.setLink($$[$0 - 4], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 4], $$[$0]);
          break;
        case 113:
          this.$ = $$[$0 - 4];
          yy.setLink($$[$0 - 4], $$[$0 - 2], $$[$0]);
          break;
        case 114:
          this.$ = $$[$0 - 6];
          yy.setLink($$[$0 - 6], $$[$0 - 4], $$[$0]);
          yy.setTooltip($$[$0 - 6], $$[$0 - 2]);
          break;
        case 117:
          this.$ = $$[$0 - 1];
          yy.setLink($$[$0 - 1], $$[$0]);
          break;
        case 118:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 119:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2], $$[$0]);
          break;
        case 120:
          this.$ = $$[$0 - 5];
          yy.setLink($$[$0 - 5], $$[$0 - 4], $$[$0]);
          yy.setTooltip($$[$0 - 5], $$[$0 - 2]);
          break;
        case 121:
          this.$ = $$[$0 - 4];
          yy.addVertex($$[$0 - 2], void 0, void 0, $$[$0]);
          break;
        case 122:
          this.$ = $$[$0 - 4];
          yy.updateLink([$$[$0 - 2]], $$[$0]);
          break;
        case 123:
          this.$ = $$[$0 - 4];
          yy.updateLink($$[$0 - 2], $$[$0]);
          break;
        case 124:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate([$$[$0 - 6]], $$[$0 - 2]);
          yy.updateLink([$$[$0 - 6]], $$[$0]);
          break;
        case 125:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate($$[$0 - 6], $$[$0 - 2]);
          yy.updateLink($$[$0 - 6], $$[$0]);
          break;
        case 126:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate([$$[$0 - 4]], $$[$0]);
          break;
        case 127:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate($$[$0 - 4], $$[$0]);
          break;
        case 128:
        case 130:
          this.$ = [$$[$0]];
          break;
        case 129:
        case 131:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 133:
          this.$ = $$[$0 - 1] + $$[$0];
          break;
        case 181:
          this.$ = $$[$0];
          break;
        case 182:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 184:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 185:
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 186:
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 187:
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 188:
          this.$ = { stmt: "dir", value: "LR" };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 9: $V0, 10: $V1, 12: $V2 }, { 1: [3] }, o($V3, $V4, { 5: 6 }), { 4: 7, 9: $V0, 10: $V1, 12: $V2 }, { 4: 8, 9: $V0, 10: $V1, 12: $V2 }, { 13: [1, 9], 14: [1, 10] }, { 1: [2, 1], 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 42: 28, 43: 38, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 84: $Vf, 85: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs, 121: $Vt, 122: $Vu, 123: $Vv, 124: $Vw }, o($V3, [2, 9]), o($V3, [2, 10]), o($V3, [2, 11]), { 8: [1, 54], 9: [1, 55], 10: $Vx, 15: 53, 18: 56 }, o($Vy, [2, 3]), o($Vy, [2, 4]), o($Vy, [2, 5]), o($Vy, [2, 6]), o($Vy, [2, 7]), o($Vy, [2, 8]), { 8: $Vz, 9: $VA, 11: $VB, 21: 58, 41: 59, 72: 63, 75: [1, 64], 77: [1, 66], 78: [1, 65] }, { 8: $Vz, 9: $VA, 11: $VB, 21: 67 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 68 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 69 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 70 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 71 }, { 8: $Vz, 9: $VA, 10: [1, 72], 11: $VB, 21: 73 }, o($Vy, [2, 36]), { 35: [1, 74] }, { 37: [1, 75] }, o($Vy, [2, 39]), o($VC, [2, 50], { 18: 76, 39: 77, 10: $Vx, 40: $VD }), { 10: [1, 79] }, { 10: [1, 80] }, { 10: [1, 81] }, { 10: [1, 82] }, { 14: $VE, 44: $VF, 60: $VG, 80: [1, 86], 89: $VH, 95: [1, 83], 97: [1, 84], 101: 85, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO, 120: 87 }, o($Vy, [2, 185]), o($Vy, [2, 186]), o($Vy, [2, 187]), o($Vy, [2, 188]), o($VP, [2, 51]), o($VP, [2, 54], { 46: [1, 99] }), o($VQ, [2, 72], { 113: 112, 29: [1, 100], 44: $Vd, 48: [1, 101], 50: [1, 102], 52: [1, 103], 54: [1, 104], 56: [1, 105], 58: [1, 106], 60: $Ve, 63: [1, 107], 65: [1, 108], 67: [1, 109], 68: [1, 110], 70: [1, 111], 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 114: $Vq, 115: $Vr, 116: $Vs }), o($VR, [2, 181]), o($VR, [2, 142]), o($VR, [2, 143]), o($VR, [2, 144]), o($VR, [2, 145]), o($VR, [2, 146]), o($VR, [2, 147]), o($VR, [2, 148]), o($VR, [2, 149]), o($VR, [2, 150]), o($VR, [2, 151]), o($VR, [2, 152]), o($V3, [2, 12]), o($V3, [2, 18]), o($V3, [2, 19]), { 9: [1, 113] }, o($VS, [2, 26], { 18: 114, 10: $Vx }), o($Vy, [2, 27]), { 42: 115, 43: 38, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, o($Vy, [2, 40]), o($Vy, [2, 41]), o($Vy, [2, 42]), o($VT, [2, 76], { 73: 116, 62: [1, 118], 74: [1, 117] }), { 76: 119, 79: 120, 80: $VU, 81: $VV, 116: $VW, 119: $VX }, { 75: [1, 125], 77: [1, 126] }, o($VY, [2, 83]), o($Vy, [2, 28]), o($Vy, [2, 29]), o($Vy, [2, 30]), o($Vy, [2, 31]), o($Vy, [2, 32]), { 10: $VZ, 12: $V_, 14: $V$, 27: $V01, 28: 127, 32: $V11, 44: $V21, 60: $V31, 75: $V41, 80: [1, 129], 81: [1, 130], 83: 140, 84: $V51, 85: $V61, 86: $V71, 87: $V81, 88: $V91, 89: $Va1, 90: $Vb1, 91: 128, 105: $Vc1, 109: $Vd1, 111: $Ve1, 114: $Vf1, 115: $Vg1, 116: $Vh1 }, o($Vi1, $V4, { 5: 153 }), o($Vy, [2, 37]), o($Vy, [2, 38]), o($VC, [2, 48], { 44: $Vj1 }), o($VC, [2, 49], { 18: 155, 10: $Vx, 40: $Vk1 }), o($VP, [2, 44]), { 44: $Vd, 47: 157, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, { 102: [1, 158], 103: 159, 105: [1, 160] }, { 44: $Vd, 47: 161, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, { 44: $Vd, 47: 162, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, o($Vl1, [2, 107], { 10: [1, 163], 96: [1, 164] }), { 80: [1, 165] }, o($Vl1, [2, 115], { 120: 167, 10: [1, 166], 14: $VE, 44: $VF, 60: $VG, 89: $VH, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO }), o($Vl1, [2, 117], { 10: [1, 168] }), o($Vm1, [2, 183]), o($Vm1, [2, 170]), o($Vm1, [2, 171]), o($Vm1, [2, 172]), o($Vm1, [2, 173]), o($Vm1, [2, 174]), o($Vm1, [2, 175]), o($Vm1, [2, 176]), o($Vm1, [2, 177]), o($Vm1, [2, 178]), o($Vm1, [2, 179]), o($Vm1, [2, 180]), { 44: $Vd, 47: 169, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, { 30: 170, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 178, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 180, 50: [1, 179], 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 181, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 182, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 183, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 109: [1, 184] }, { 30: 185, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 186, 65: [1, 187], 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 188, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 189, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 190, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VR, [2, 182]), o($V3, [2, 20]), o($VS, [2, 25]), o($VC, [2, 46], { 39: 191, 18: 192, 10: $Vx, 40: $VD }), o($VT, [2, 73], { 10: [1, 193] }), { 10: [1, 194] }, { 30: 195, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 77: [1, 196], 79: 197, 116: $VW, 119: $VX }, o($Vt1, [2, 79]), o($Vt1, [2, 81]), o($Vt1, [2, 82]), o($Vt1, [2, 168]), o($Vt1, [2, 169]), { 76: 198, 79: 120, 80: $VU, 81: $VV, 116: $VW, 119: $VX }, o($VY, [2, 84]), { 8: $Vz, 9: $VA, 10: $VZ, 11: $VB, 12: $V_, 14: $V$, 21: 200, 27: $V01, 29: [1, 199], 32: $V11, 44: $V21, 60: $V31, 75: $V41, 83: 140, 84: $V51, 85: $V61, 86: $V71, 87: $V81, 88: $V91, 89: $Va1, 90: $Vb1, 91: 201, 105: $Vc1, 109: $Vd1, 111: $Ve1, 114: $Vf1, 115: $Vg1, 116: $Vh1 }, o($Vu1, [2, 101]), o($Vu1, [2, 103]), o($Vu1, [2, 104]), o($Vu1, [2, 157]), o($Vu1, [2, 158]), o($Vu1, [2, 159]), o($Vu1, [2, 160]), o($Vu1, [2, 161]), o($Vu1, [2, 162]), o($Vu1, [2, 163]), o($Vu1, [2, 164]), o($Vu1, [2, 165]), o($Vu1, [2, 166]), o($Vu1, [2, 167]), o($Vu1, [2, 90]), o($Vu1, [2, 91]), o($Vu1, [2, 92]), o($Vu1, [2, 93]), o($Vu1, [2, 94]), o($Vu1, [2, 95]), o($Vu1, [2, 96]), o($Vu1, [2, 97]), o($Vu1, [2, 98]), o($Vu1, [2, 99]), o($Vu1, [2, 100]), { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 202], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 42: 28, 43: 38, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 84: $Vf, 85: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs, 121: $Vt, 122: $Vu, 123: $Vv, 124: $Vw }, { 10: $Vx, 18: 203 }, { 44: [1, 204] }, o($VP, [2, 43]), { 10: [1, 205], 44: $Vd, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 112, 114: $Vq, 115: $Vr, 116: $Vs }, { 10: [1, 206] }, { 10: [1, 207], 106: [1, 208] }, o($Vv1, [2, 128]), { 10: [1, 209], 44: $Vd, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 112, 114: $Vq, 115: $Vr, 116: $Vs }, { 10: [1, 210], 44: $Vd, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 112, 114: $Vq, 115: $Vr, 116: $Vs }, { 80: [1, 211] }, o($Vl1, [2, 109], { 10: [1, 212] }), o($Vl1, [2, 111], { 10: [1, 213] }), { 80: [1, 214] }, o($Vm1, [2, 184]), { 80: [1, 215], 98: [1, 216] }, o($VP, [2, 55], { 113: 112, 44: $Vd, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 114: $Vq, 115: $Vr, 116: $Vs }), { 31: [1, 217], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($Vw1, [2, 86]), o($Vw1, [2, 88]), o($Vw1, [2, 89]), o($Vw1, [2, 153]), o($Vw1, [2, 154]), o($Vw1, [2, 155]), o($Vw1, [2, 156]), { 49: [1, 219], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 220, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 51: [1, 221], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 53: [1, 222], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 55: [1, 223], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 57: [1, 224], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 60: [1, 225] }, { 64: [1, 226], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 66: [1, 227], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 30: 228, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 31: [1, 229], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 67: $Vn1, 69: [1, 230], 71: [1, 231], 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 67: $Vn1, 69: [1, 233], 71: [1, 232], 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VC, [2, 45], { 18: 155, 10: $Vx, 40: $Vk1 }), o($VC, [2, 47], { 44: $Vj1 }), o($VT, [2, 75]), o($VT, [2, 74]), { 62: [1, 234], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VT, [2, 77]), o($Vt1, [2, 80]), { 77: [1, 235], 79: 197, 116: $VW, 119: $VX }, { 30: 236, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($Vi1, $V4, { 5: 237 }), o($Vu1, [2, 102]), o($Vy, [2, 35]), { 43: 238, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, { 10: $Vx, 18: 239 }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 240, 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 251, 104: [1, 252], 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 253, 104: [1, 254], 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, { 105: [1, 255] }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 256, 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, { 44: $Vd, 47: 257, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, o($Vl1, [2, 108]), { 80: [1, 258] }, { 80: [1, 259], 98: [1, 260] }, o($Vl1, [2, 116]), o($Vl1, [2, 118], { 10: [1, 261] }), o($Vl1, [2, 119]), o($VQ, [2, 56]), o($Vw1, [2, 87]), o($VQ, [2, 57]), { 51: [1, 262], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VQ, [2, 64]), o($VQ, [2, 59]), o($VQ, [2, 60]), o($VQ, [2, 61]), { 109: [1, 263] }, o($VQ, [2, 63]), o($VQ, [2, 65]), { 66: [1, 264], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VQ, [2, 67]), o($VQ, [2, 68]), o($VQ, [2, 70]), o($VQ, [2, 69]), o($VQ, [2, 71]), o([10, 44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], [2, 85]), o($VT, [2, 78]), { 31: [1, 265], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 266], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 42: 28, 43: 38, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 84: $Vf, 85: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs, 121: $Vt, 122: $Vu, 123: $Vv, 124: $Vw }, o($VP, [2, 53]), { 43: 267, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs }, o($Vl1, [2, 121], { 106: $VF1 }), o($VG1, [2, 130], { 108: 269, 10: $Vx1, 60: $Vy1, 84: $Vz1, 105: $VA1, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }), o($VH1, [2, 132]), o($VH1, [2, 134]), o($VH1, [2, 135]), o($VH1, [2, 136]), o($VH1, [2, 137]), o($VH1, [2, 138]), o($VH1, [2, 139]), o($VH1, [2, 140]), o($VH1, [2, 141]), o($Vl1, [2, 122], { 106: $VF1 }), { 10: [1, 270] }, o($Vl1, [2, 123], { 106: $VF1 }), { 10: [1, 271] }, o($Vv1, [2, 129]), o($Vl1, [2, 105], { 106: $VF1 }), o($Vl1, [2, 106], { 113: 112, 44: $Vd, 60: $Ve, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 114: $Vq, 115: $Vr, 116: $Vs }), o($Vl1, [2, 110]), o($Vl1, [2, 112], { 10: [1, 272] }), o($Vl1, [2, 113]), { 98: [1, 273] }, { 51: [1, 274] }, { 62: [1, 275] }, { 66: [1, 276] }, { 8: $Vz, 9: $VA, 11: $VB, 21: 277 }, o($Vy, [2, 34]), o($VP, [2, 52]), { 10: $Vx1, 60: $Vy1, 84: $Vz1, 105: $VA1, 107: 278, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, o($VH1, [2, 133]), { 14: $VE, 44: $VF, 60: $VG, 89: $VH, 101: 279, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO, 120: 87 }, { 14: $VE, 44: $VF, 60: $VG, 89: $VH, 101: 280, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO, 120: 87 }, { 98: [1, 281] }, o($Vl1, [2, 120]), o($VQ, [2, 58]), { 30: 282, 67: $Vn1, 80: $Vo1, 81: $Vp1, 82: 171, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, o($VQ, [2, 66]), o($Vi1, $V4, { 5: 283 }), o($VG1, [2, 131], { 108: 269, 10: $Vx1, 60: $Vy1, 84: $Vz1, 105: $VA1, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }), o($Vl1, [2, 126], { 120: 167, 10: [1, 284], 14: $VE, 44: $VF, 60: $VG, 89: $VH, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO }), o($Vl1, [2, 127], { 120: 167, 10: [1, 285], 14: $VE, 44: $VF, 60: $VG, 89: $VH, 105: $VI, 106: $VJ, 109: $VK, 111: $VL, 114: $VM, 115: $VN, 116: $VO }), o($Vl1, [2, 114]), { 31: [1, 286], 67: $Vn1, 82: 218, 116: $Vq1, 117: $Vr1, 118: $Vs1 }, { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 287], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 42: 28, 43: 38, 44: $Vd, 45: 39, 47: 40, 60: $Ve, 84: $Vf, 85: $Vg, 86: $Vh, 87: $Vi, 88: $Vj, 89: $Vk, 102: $Vl, 105: $Vm, 106: $Vn, 109: $Vo, 111: $Vp, 113: 41, 114: $Vq, 115: $Vr, 116: $Vs, 121: $Vt, 122: $Vu, 123: $Vv, 124: $Vw }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 288, 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, { 10: $Vx1, 60: $Vy1, 84: $Vz1, 92: 289, 105: $VA1, 107: 241, 108: 242, 109: $VB1, 110: $VC1, 111: $VD1, 112: $VE1 }, o($VQ, [2, 62]), o($Vy, [2, 33]), o($Vl1, [2, 124], { 106: $VF1 }), o($Vl1, [2, 125], { 106: $VF1 })],
    defaultActions: {},
    parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ __name(function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      __name(popStack, "popStack");
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      __name(lex, "lex");
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  };
  var lexer = /* @__PURE__ */ (function() {
    var lexer2 = {
      EOF: 1,
      parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ __name(function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ __name(function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ __name(function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ __name(function() {
        this._more = true;
        return this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ __name(function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ __name(function(n) {
        this.unput(this.match.slice(n));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ __name(function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ __name(function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ __name(function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ __name(function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ __name(function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ __name(function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ __name(function begin(condition) {
        this.conditionStack.push(condition);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ __name(function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ __name(function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ __name(function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ __name(function pushState(condition) {
        this.begin(condition);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ __name(function stateStackSize() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */ __name(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            this.begin("acc_title");
            return 34;
            break;
          case 1:
            this.popState();
            return "acc_title_value";
            break;
          case 2:
            this.begin("acc_descr");
            return 36;
            break;
          case 3:
            this.popState();
            return "acc_descr_value";
            break;
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
            break;
          case 7:
            this.pushState("shapeData");
            yy_.yytext = "";
            return 40;
            break;
          case 8:
            this.pushState("shapeDataStr");
            return 40;
            break;
          case 9:
            this.popState();
            return 40;
            break;
          case 10:
            const re = /\n\s*/g;
            yy_.yytext = yy_.yytext.replace(re, "<br/>");
            return 40;
            break;
          case 11:
            return 40;
            break;
          case 12:
            this.popState();
            break;
          case 13:
            this.begin("callbackname");
            break;
          case 14:
            this.popState();
            break;
          case 15:
            this.popState();
            this.begin("callbackargs");
            break;
          case 16:
            return 95;
            break;
          case 17:
            this.popState();
            break;
          case 18:
            return 96;
            break;
          case 19:
            return "MD_STR";
            break;
          case 20:
            this.popState();
            break;
          case 21:
            this.begin("md_string");
            break;
          case 22:
            return "STR";
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.pushState("string");
            break;
          case 25:
            return 84;
            break;
          case 26:
            return 102;
            break;
          case 27:
            return 85;
            break;
          case 28:
            return 104;
            break;
          case 29:
            return 86;
            break;
          case 30:
            return 87;
            break;
          case 31:
            return 97;
            break;
          case 32:
            this.begin("click");
            break;
          case 33:
            this.popState();
            break;
          case 34:
            return 88;
            break;
          case 35:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 36:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 37:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 38:
            return 27;
            break;
          case 39:
            return 32;
            break;
          case 40:
            return 98;
            break;
          case 41:
            return 98;
            break;
          case 42:
            return 98;
            break;
          case 43:
            return 98;
            break;
          case 44:
            this.popState();
            return 13;
            break;
          case 45:
            this.popState();
            return 14;
            break;
          case 46:
            this.popState();
            return 14;
            break;
          case 47:
            this.popState();
            return 14;
            break;
          case 48:
            this.popState();
            return 14;
            break;
          case 49:
            this.popState();
            return 14;
            break;
          case 50:
            this.popState();
            return 14;
            break;
          case 51:
            this.popState();
            return 14;
            break;
          case 52:
            this.popState();
            return 14;
            break;
          case 53:
            this.popState();
            return 14;
            break;
          case 54:
            this.popState();
            return 14;
            break;
          case 55:
            return 121;
            break;
          case 56:
            return 122;
            break;
          case 57:
            return 123;
            break;
          case 58:
            return 124;
            break;
          case 59:
            return 78;
            break;
          case 60:
            return 105;
            break;
          case 61:
            return 111;
            break;
          case 62:
            return 46;
            break;
          case 63:
            return 60;
            break;
          case 64:
            return 44;
            break;
          case 65:
            return 8;
            break;
          case 66:
            return 106;
            break;
          case 67:
            return 115;
            break;
          case 68:
            this.popState();
            return 77;
            break;
          case 69:
            this.pushState("edgeText");
            return 75;
            break;
          case 70:
            return 119;
            break;
          case 71:
            this.popState();
            return 77;
            break;
          case 72:
            this.pushState("thickEdgeText");
            return 75;
            break;
          case 73:
            return 119;
            break;
          case 74:
            this.popState();
            return 77;
            break;
          case 75:
            this.pushState("dottedEdgeText");
            return 75;
            break;
          case 76:
            return 119;
            break;
          case 77:
            return 77;
            break;
          case 78:
            this.popState();
            return 53;
            break;
          case 79:
            return "TEXT";
            break;
          case 80:
            this.pushState("ellipseText");
            return 52;
            break;
          case 81:
            this.popState();
            return 55;
            break;
          case 82:
            this.pushState("text");
            return 54;
            break;
          case 83:
            this.popState();
            return 57;
            break;
          case 84:
            this.pushState("text");
            return 56;
            break;
          case 85:
            return 58;
            break;
          case 86:
            this.pushState("text");
            return 67;
            break;
          case 87:
            this.popState();
            return 64;
            break;
          case 88:
            this.pushState("text");
            return 63;
            break;
          case 89:
            this.popState();
            return 49;
            break;
          case 90:
            this.pushState("text");
            return 48;
            break;
          case 91:
            this.popState();
            return 69;
            break;
          case 92:
            this.popState();
            return 71;
            break;
          case 93:
            return 117;
            break;
          case 94:
            this.pushState("trapText");
            return 68;
            break;
          case 95:
            this.pushState("trapText");
            return 70;
            break;
          case 96:
            return 118;
            break;
          case 97:
            return 67;
            break;
          case 98:
            return 90;
            break;
          case 99:
            return "SEP";
            break;
          case 100:
            return 89;
            break;
          case 101:
            return 115;
            break;
          case 102:
            return 111;
            break;
          case 103:
            return 44;
            break;
          case 104:
            return 109;
            break;
          case 105:
            return 114;
            break;
          case 106:
            return 116;
            break;
          case 107:
            this.popState();
            return 62;
            break;
          case 108:
            this.pushState("text");
            return 62;
            break;
          case 109:
            this.popState();
            return 51;
            break;
          case 110:
            this.pushState("text");
            return 50;
            break;
          case 111:
            this.popState();
            return 31;
            break;
          case 112:
            this.pushState("text");
            return 29;
            break;
          case 113:
            this.popState();
            return 66;
            break;
          case 114:
            this.pushState("text");
            return 65;
            break;
          case 115:
            return "TEXT";
            break;
          case 116:
            return "QUOTE";
            break;
          case 117:
            return 9;
            break;
          case 118:
            return 10;
            break;
          case 119:
            return 11;
            break;
        }
      }, "anonymous"),
      rules: [/^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:@\{)/, /^(?:["])/, /^(?:["])/, /^(?:[^\"]+)/, /^(?:[^}^"]+)/, /^(?:\})/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["][`])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:["])/, /^(?:style\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\b)/, /^(?:class\b)/, /^(?:href[\s])/, /^(?:click[\s]+)/, /^(?:[\s\n])/, /^(?:[^\s\n]*)/, /^(?:flowchart-elk\b)/, /^(?:graph\b)/, /^(?:flowchart\b)/, /^(?:subgraph\b)/, /^(?:end\b\s*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:(\r?\n)*\s*\n)/, /^(?:\s*LR\b)/, /^(?:\s*RL\b)/, /^(?:\s*TB\b)/, /^(?:\s*BT\b)/, /^(?:\s*TD\b)/, /^(?:\s*BR\b)/, /^(?:\s*<)/, /^(?:\s*>)/, /^(?:\s*\^)/, /^(?:\s*v\b)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:[^\s\"]+@(?=[^\{\"]))/, /^(?:[0-9]+)/, /^(?:#)/, /^(?::::)/, /^(?::)/, /^(?:&)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:[^-]|-(?!-)+)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:[^=]|=(?!))/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:[^\.]|\.(?!))/, /^(?:\s*~~[\~]+\s*)/, /^(?:[-/\)][\)])/, /^(?:[^\(\)\[\]\{\}]|!\)+)/, /^(?:\(-)/, /^(?:\]\))/, /^(?:\(\[)/, /^(?:\]\])/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:>)/, /^(?:\)\])/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\(\(\()/, /^(?:[\\(?=\])][\]])/, /^(?:\/(?=\])\])/, /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:<)/, /^(?:>)/, /^(?:\^)/, /^(?:\\\|)/, /^(?:v\b)/, /^(?:\*)/, /^(?:#)/, /^(?:&)/, /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/, /^(?:-)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\|)/, /^(?:\|)/, /^(?:\))/, /^(?:\()/, /^(?:\])/, /^(?:\[)/, /^(?:(\}))/, /^(?:\{)/, /^(?:[^\[\]\(\)\{\}\|\"]+)/, /^(?:")/, /^(?:(\r?\n)+)/, /^(?:\s)/, /^(?:$)/],
      conditions: { "shapeDataEndBracket": { "rules": [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "shapeDataStr": { "rules": [9, 10, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "shapeData": { "rules": [8, 11, 12, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "callbackargs": { "rules": [17, 18, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "callbackname": { "rules": [14, 15, 16, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "href": { "rules": [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "click": { "rules": [21, 24, 33, 34, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "dottedEdgeText": { "rules": [21, 24, 74, 76, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "thickEdgeText": { "rules": [21, 24, 71, 73, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "edgeText": { "rules": [21, 24, 68, 70, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "trapText": { "rules": [21, 24, 77, 80, 82, 84, 88, 90, 91, 92, 93, 94, 95, 108, 110, 112, 114], "inclusive": false }, "ellipseText": { "rules": [21, 24, 77, 78, 79, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "text": { "rules": [21, 24, 77, 80, 81, 82, 83, 84, 87, 88, 89, 90, 94, 95, 107, 108, 109, 110, 111, 112, 113, 114, 115], "inclusive": false }, "vertex": { "rules": [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "dir": { "rules": [21, 24, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "acc_descr_multiline": { "rules": [5, 6, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "acc_descr": { "rules": [3, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "acc_title": { "rules": [1, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "md_string": { "rules": [19, 20, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "string": { "rules": [21, 22, 23, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], "inclusive": false }, "INITIAL": { "rules": [0, 2, 4, 7, 13, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 74, 75, 77, 80, 82, 84, 85, 86, 88, 90, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 110, 112, 114, 116, 117, 118, 119], "inclusive": true } }
    };
    return lexer2;
  })();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  __name(Parser, "Parser");
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
})();

const sequence = (function() {
  var o = /* @__PURE__ */ __name(function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v) ;
    return o2;
  }, "o"), $V0 = [1, 2], $V1 = [1, 3], $V2 = [1, 4], $V3 = [2, 4], $V4 = [1, 9], $V5 = [1, 11], $V6 = [1, 13], $V7 = [1, 14], $V8 = [1, 16], $V9 = [1, 17], $Va = [1, 18], $Vb = [1, 24], $Vc = [1, 25], $Vd = [1, 26], $Ve = [1, 27], $Vf = [1, 28], $Vg = [1, 29], $Vh = [1, 30], $Vi = [1, 31], $Vj = [1, 32], $Vk = [1, 33], $Vl = [1, 34], $Vm = [1, 35], $Vn = [1, 36], $Vo = [1, 37], $Vp = [1, 38], $Vq = [1, 39], $Vr = [1, 41], $Vs = [1, 42], $Vt = [1, 43], $Vu = [1, 44], $Vv = [1, 45], $Vw = [1, 46], $Vx = [1, 4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 48, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71], $Vy = [2, 71], $Vz = [4, 5, 16, 50, 52, 53], $VA = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71], $VB = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71], $VC = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 48, 50, 52, 53, 55, 60, 61, 62, 63, 71], $VD = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 50, 52, 53, 55, 60, 61, 62, 63, 71], $VE = [69, 70, 71], $VF = [1, 127];
  var parser2 = {
    trace: /* @__PURE__ */ __name(function trace() {
    }, "trace"),
    yy: {},
    symbols_: { "error": 2, "start": 3, "SPACE": 4, "NEWLINE": 5, "SD": 6, "document": 7, "line": 8, "statement": 9, "box_section": 10, "box_line": 11, "participant_statement": 12, "create": 13, "box": 14, "restOfLine": 15, "end": 16, "signal": 17, "autonumber": 18, "NUM": 19, "off": 20, "activate": 21, "actor": 22, "deactivate": 23, "note_statement": 24, "links_statement": 25, "link_statement": 26, "properties_statement": 27, "details_statement": 28, "title": 29, "legacy_title": 30, "acc_title": 31, "acc_title_value": 32, "acc_descr": 33, "acc_descr_value": 34, "acc_descr_multiline_value": 35, "loop": 36, "rect": 37, "opt": 38, "alt": 39, "else_sections": 40, "par": 41, "par_sections": 42, "par_over": 43, "critical": 44, "option_sections": 45, "break": 46, "option": 47, "and": 48, "else": 49, "participant": 50, "AS": 51, "participant_actor": 52, "destroy": 53, "actor_with_config": 54, "note": 55, "placement": 56, "text2": 57, "over": 58, "actor_pair": 59, "links": 60, "link": 61, "properties": 62, "details": 63, "spaceList": 64, ",": 65, "left_of": 66, "right_of": 67, "signaltype": 68, "+": 69, "-": 70, "ACTOR": 71, "config_object": 72, "CONFIG_START": 73, "CONFIG_CONTENT": 74, "CONFIG_END": 75, "SOLID_OPEN_ARROW": 76, "DOTTED_OPEN_ARROW": 77, "SOLID_ARROW": 78, "BIDIRECTIONAL_SOLID_ARROW": 79, "DOTTED_ARROW": 80, "BIDIRECTIONAL_DOTTED_ARROW": 81, "SOLID_CROSS": 82, "DOTTED_CROSS": 83, "SOLID_POINT": 84, "DOTTED_POINT": 85, "TXT": 86, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NEWLINE", 6: "SD", 13: "create", 14: "box", 15: "restOfLine", 16: "end", 18: "autonumber", 19: "NUM", 20: "off", 21: "activate", 23: "deactivate", 29: "title", 30: "legacy_title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "loop", 37: "rect", 38: "opt", 39: "alt", 41: "par", 43: "par_over", 44: "critical", 46: "break", 47: "option", 48: "and", 49: "else", 50: "participant", 51: "AS", 52: "participant_actor", 53: "destroy", 55: "note", 58: "over", 60: "links", 61: "link", 62: "properties", 63: "details", 65: ",", 66: "left_of", 67: "right_of", 69: "+", 70: "-", 71: "ACTOR", 73: "CONFIG_START", 74: "CONFIG_CONTENT", 75: "CONFIG_END", 76: "SOLID_OPEN_ARROW", 77: "DOTTED_OPEN_ARROW", 78: "SOLID_ARROW", 79: "BIDIRECTIONAL_SOLID_ARROW", 80: "DOTTED_ARROW", 81: "BIDIRECTIONAL_DOTTED_ARROW", 82: "SOLID_CROSS", 83: "DOTTED_CROSS", 84: "SOLID_POINT", 85: "DOTTED_POINT", 86: "TXT" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [10, 0], [10, 2], [11, 2], [11, 1], [11, 1], [9, 1], [9, 2], [9, 4], [9, 2], [9, 4], [9, 3], [9, 3], [9, 2], [9, 3], [9, 3], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [45, 1], [45, 4], [42, 1], [42, 4], [40, 1], [40, 4], [12, 5], [12, 3], [12, 5], [12, 3], [12, 3], [12, 3], [24, 4], [24, 4], [25, 3], [26, 3], [27, 3], [28, 3], [64, 2], [64, 1], [59, 3], [59, 1], [56, 1], [56, 1], [17, 5], [17, 5], [17, 4], [54, 2], [72, 3], [22, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [57, 1]],
    performAction: /* @__PURE__ */ __name(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 3:
          yy.apply($$[$0]);
          return $$[$0];
          break;
        case 4:
        case 9:
          this.$ = [];
          break;
        case 5:
        case 10:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 6:
        case 7:
        case 11:
        case 12:
          this.$ = $$[$0];
          break;
        case 8:
        case 13:
          this.$ = [];
          break;
        case 15:
          $$[$0].type = "createParticipant";
          this.$ = $$[$0];
          break;
        case 16:
          $$[$0 - 1].unshift({ type: "boxStart", boxData: yy.parseBoxData($$[$0 - 2]) });
          $$[$0 - 1].push({ type: "boxEnd", boxText: $$[$0 - 2] });
          this.$ = $$[$0 - 1];
          break;
        case 18:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 2]), sequenceIndexStep: Number($$[$0 - 1]), sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 19:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 1]), sequenceIndexStep: 1, sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 20:
          this.$ = { type: "sequenceIndex", sequenceVisible: false, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 21:
          this.$ = { type: "sequenceIndex", sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 22:
          this.$ = { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1].actor };
          break;
        case 23:
          this.$ = { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 1].actor };
          break;
        case 29:
          yy.setDiagramTitle($$[$0].substring(6));
          this.$ = $$[$0].substring(6);
          break;
        case 30:
          yy.setDiagramTitle($$[$0].substring(7));
          this.$ = $$[$0].substring(7);
          break;
        case 31:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 32:
        case 33:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 34:
          $$[$0 - 1].unshift({ type: "loopStart", loopText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.LOOP_START });
          $$[$0 - 1].push({ type: "loopEnd", loopText: $$[$0 - 2], signalType: yy.LINETYPE.LOOP_END });
          this.$ = $$[$0 - 1];
          break;
        case 35:
          $$[$0 - 1].unshift({ type: "rectStart", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_START });
          $$[$0 - 1].push({ type: "rectEnd", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_END });
          this.$ = $$[$0 - 1];
          break;
        case 36:
          $$[$0 - 1].unshift({ type: "optStart", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_START });
          $$[$0 - 1].push({ type: "optEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_END });
          this.$ = $$[$0 - 1];
          break;
        case 37:
          $$[$0 - 1].unshift({ type: "altStart", altText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.ALT_START });
          $$[$0 - 1].push({ type: "altEnd", signalType: yy.LINETYPE.ALT_END });
          this.$ = $$[$0 - 1];
          break;
        case 38:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 39:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_OVER_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 40:
          $$[$0 - 1].unshift({ type: "criticalStart", criticalText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.CRITICAL_START });
          $$[$0 - 1].push({ type: "criticalEnd", signalType: yy.LINETYPE.CRITICAL_END });
          this.$ = $$[$0 - 1];
          break;
        case 41:
          $$[$0 - 1].unshift({ type: "breakStart", breakText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_START });
          $$[$0 - 1].push({ type: "breakEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_END });
          this.$ = $$[$0 - 1];
          break;
        case 43:
          this.$ = $$[$0 - 3].concat([{ type: "option", optionText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.CRITICAL_OPTION }, $$[$0]]);
          break;
        case 45:
          this.$ = $$[$0 - 3].concat([{ type: "and", parText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.PAR_AND }, $$[$0]]);
          break;
        case 47:
          this.$ = $$[$0 - 3].concat([{ type: "else", altText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.ALT_ELSE }, $$[$0]]);
          break;
        case 48:
          $$[$0 - 3].draw = "participant";
          $$[$0 - 3].type = "addParticipant";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 49:
          $$[$0 - 1].draw = "participant";
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 50:
          $$[$0 - 3].draw = "actor";
          $$[$0 - 3].type = "addParticipant";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 51:
          $$[$0 - 1].draw = "actor";
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 52:
          $$[$0 - 1].type = "destroyParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 53:
          $$[$0 - 1].draw = "participant";
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 54:
          this.$ = [$$[$0 - 1], { type: "addNote", placement: $$[$0 - 2], actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 55:
          $$[$0 - 2] = [].concat($$[$0 - 1], $$[$0 - 1]).slice(0, 2);
          $$[$0 - 2][0] = $$[$0 - 2][0].actor;
          $$[$0 - 2][1] = $$[$0 - 2][1].actor;
          this.$ = [$$[$0 - 1], { type: "addNote", placement: yy.PLACEMENT.OVER, actor: $$[$0 - 2].slice(0, 2), text: $$[$0] }];
          break;
        case 56:
          this.$ = [$$[$0 - 1], { type: "addLinks", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 57:
          this.$ = [$$[$0 - 1], { type: "addALink", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 58:
          this.$ = [$$[$0 - 1], { type: "addProperties", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 59:
          this.$ = [$$[$0 - 1], { type: "addDetails", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 62:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 63:
          this.$ = $$[$0];
          break;
        case 64:
          this.$ = yy.PLACEMENT.LEFTOF;
          break;
        case 65:
          this.$ = yy.PLACEMENT.RIGHTOF;
          break;
        case 66:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0], activate: true },
            { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1].actor }
          ];
          break;
        case 67:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0] },
            { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 4].actor }
          ];
          break;
        case 68:
          this.$ = [$$[$0 - 3], $$[$0 - 1], { type: "addMessage", from: $$[$0 - 3].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 2], msg: $$[$0] }];
          break;
        case 69:
          this.$ = {
            type: "addParticipant",
            actor: $$[$0 - 1],
            config: $$[$0]
          };
          break;
        case 70:
          this.$ = $$[$0 - 1].trim();
          break;
        case 71:
          this.$ = { type: "addParticipant", actor: $$[$0] };
          break;
        case 72:
          this.$ = yy.LINETYPE.SOLID_OPEN;
          break;
        case 73:
          this.$ = yy.LINETYPE.DOTTED_OPEN;
          break;
        case 74:
          this.$ = yy.LINETYPE.SOLID;
          break;
        case 75:
          this.$ = yy.LINETYPE.BIDIRECTIONAL_SOLID;
          break;
        case 76:
          this.$ = yy.LINETYPE.DOTTED;
          break;
        case 77:
          this.$ = yy.LINETYPE.BIDIRECTIONAL_DOTTED;
          break;
        case 78:
          this.$ = yy.LINETYPE.SOLID_CROSS;
          break;
        case 79:
          this.$ = yy.LINETYPE.DOTTED_CROSS;
          break;
        case 80:
          this.$ = yy.LINETYPE.SOLID_POINT;
          break;
        case 81:
          this.$ = yy.LINETYPE.DOTTED_POINT;
          break;
        case 82:
          this.$ = yy.parseMessage($$[$0].trim().substring(1));
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: $V0, 5: $V1, 6: $V2 }, { 1: [3] }, { 3: 5, 4: $V0, 5: $V1, 6: $V2 }, { 3: 6, 4: $V0, 5: $V1, 6: $V2 }, o([1, 4, 5, 13, 14, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71], $V3, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, o($Vx, [2, 5]), { 9: 47, 12: 12, 13: $V6, 14: $V7, 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, o($Vx, [2, 7]), o($Vx, [2, 8]), o($Vx, [2, 14]), { 12: 48, 50: $Vo, 52: $Vp, 53: $Vq }, { 15: [1, 49] }, { 5: [1, 50] }, { 5: [1, 53], 19: [1, 51], 20: [1, 52] }, { 22: 54, 71: $Vw }, { 22: 55, 71: $Vw }, { 5: [1, 56] }, { 5: [1, 57] }, { 5: [1, 58] }, { 5: [1, 59] }, { 5: [1, 60] }, o($Vx, [2, 29]), o($Vx, [2, 30]), { 32: [1, 61] }, { 34: [1, 62] }, o($Vx, [2, 33]), { 15: [1, 63] }, { 15: [1, 64] }, { 15: [1, 65] }, { 15: [1, 66] }, { 15: [1, 67] }, { 15: [1, 68] }, { 15: [1, 69] }, { 15: [1, 70] }, { 22: 71, 54: 72, 71: [1, 73] }, { 22: 74, 71: $Vw }, { 22: 75, 71: $Vw }, { 68: 76, 76: [1, 77], 77: [1, 78], 78: [1, 79], 79: [1, 80], 80: [1, 81], 81: [1, 82], 82: [1, 83], 83: [1, 84], 84: [1, 85], 85: [1, 86] }, { 56: 87, 58: [1, 88], 66: [1, 89], 67: [1, 90] }, { 22: 91, 71: $Vw }, { 22: 92, 71: $Vw }, { 22: 93, 71: $Vw }, { 22: 94, 71: $Vw }, o([5, 51, 65, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], $Vy), o($Vx, [2, 6]), o($Vx, [2, 15]), o($Vz, [2, 9], { 10: 95 }), o($Vx, [2, 17]), { 5: [1, 97], 19: [1, 96] }, { 5: [1, 98] }, o($Vx, [2, 21]), { 5: [1, 99] }, { 5: [1, 100] }, o($Vx, [2, 24]), o($Vx, [2, 25]), o($Vx, [2, 26]), o($Vx, [2, 27]), o($Vx, [2, 28]), o($Vx, [2, 31]), o($Vx, [2, 32]), o($VA, $V3, { 7: 101 }), o($VA, $V3, { 7: 102 }), o($VA, $V3, { 7: 103 }), o($VB, $V3, { 40: 104, 7: 105 }), o($VC, $V3, { 42: 106, 7: 107 }), o($VC, $V3, { 7: 107, 42: 108 }), o($VD, $V3, { 45: 109, 7: 110 }), o($VA, $V3, { 7: 111 }), { 5: [1, 113], 51: [1, 112] }, { 5: [1, 114] }, o([5, 51], $Vy, { 72: 115, 73: [1, 116] }), { 5: [1, 118], 51: [1, 117] }, { 5: [1, 119] }, { 22: 122, 69: [1, 120], 70: [1, 121], 71: $Vw }, o($VE, [2, 72]), o($VE, [2, 73]), o($VE, [2, 74]), o($VE, [2, 75]), o($VE, [2, 76]), o($VE, [2, 77]), o($VE, [2, 78]), o($VE, [2, 79]), o($VE, [2, 80]), o($VE, [2, 81]), { 22: 123, 71: $Vw }, { 22: 125, 59: 124, 71: $Vw }, { 71: [2, 64] }, { 71: [2, 65] }, { 57: 126, 86: $VF }, { 57: 128, 86: $VF }, { 57: 129, 86: $VF }, { 57: 130, 86: $VF }, { 4: [1, 133], 5: [1, 135], 11: 132, 12: 134, 16: [1, 131], 50: $Vo, 52: $Vp, 53: $Vq }, { 5: [1, 136] }, o($Vx, [2, 19]), o($Vx, [2, 20]), o($Vx, [2, 22]), o($Vx, [2, 23]), { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 137], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 138], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 139], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 16: [1, 140] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 46], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 49: [1, 141], 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 16: [1, 142] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 44], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 48: [1, 143], 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 16: [1, 144] }, { 16: [1, 145] }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [2, 42], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 47: [1, 146], 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 4: $V4, 5: $V5, 8: 8, 9: 10, 12: 12, 13: $V6, 14: $V7, 16: [1, 147], 17: 15, 18: $V8, 21: $V9, 22: 40, 23: $Va, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: $Vb, 30: $Vc, 31: $Vd, 33: $Ve, 35: $Vf, 36: $Vg, 37: $Vh, 38: $Vi, 39: $Vj, 41: $Vk, 43: $Vl, 44: $Vm, 46: $Vn, 50: $Vo, 52: $Vp, 53: $Vq, 55: $Vr, 60: $Vs, 61: $Vt, 62: $Vu, 63: $Vv, 71: $Vw }, { 15: [1, 148] }, o($Vx, [2, 49]), o($Vx, [2, 53]), { 5: [2, 69] }, { 74: [1, 149] }, { 15: [1, 150] }, o($Vx, [2, 51]), o($Vx, [2, 52]), { 22: 151, 71: $Vw }, { 22: 152, 71: $Vw }, { 57: 153, 86: $VF }, { 57: 154, 86: $VF }, { 57: 155, 86: $VF }, { 65: [1, 156], 86: [2, 63] }, { 5: [2, 56] }, { 5: [2, 82] }, { 5: [2, 57] }, { 5: [2, 58] }, { 5: [2, 59] }, o($Vx, [2, 16]), o($Vz, [2, 10]), { 12: 157, 50: $Vo, 52: $Vp, 53: $Vq }, o($Vz, [2, 12]), o($Vz, [2, 13]), o($Vx, [2, 18]), o($Vx, [2, 34]), o($Vx, [2, 35]), o($Vx, [2, 36]), o($Vx, [2, 37]), { 15: [1, 158] }, o($Vx, [2, 38]), { 15: [1, 159] }, o($Vx, [2, 39]), o($Vx, [2, 40]), { 15: [1, 160] }, o($Vx, [2, 41]), { 5: [1, 161] }, { 75: [1, 162] }, { 5: [1, 163] }, { 57: 164, 86: $VF }, { 57: 165, 86: $VF }, { 5: [2, 68] }, { 5: [2, 54] }, { 5: [2, 55] }, { 22: 166, 71: $Vw }, o($Vz, [2, 11]), o($VB, $V3, { 7: 105, 40: 167 }), o($VC, $V3, { 7: 107, 42: 168 }), o($VD, $V3, { 7: 110, 45: 169 }), o($Vx, [2, 48]), { 5: [2, 70] }, o($Vx, [2, 50]), { 5: [2, 66] }, { 5: [2, 67] }, { 86: [2, 62] }, { 16: [2, 47] }, { 16: [2, 45] }, { 16: [2, 43] }],
    defaultActions: { 5: [2, 1], 6: [2, 2], 89: [2, 64], 90: [2, 65], 115: [2, 69], 126: [2, 56], 127: [2, 82], 128: [2, 57], 129: [2, 58], 130: [2, 59], 153: [2, 68], 154: [2, 54], 155: [2, 55], 162: [2, 70], 164: [2, 66], 165: [2, 67], 166: [2, 62], 167: [2, 47], 168: [2, 45], 169: [2, 43] },
    parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ __name(function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      __name(popStack, "popStack");
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      __name(lex, "lex");
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  };
  var lexer = /* @__PURE__ */ (function() {
    var lexer2 = {
      EOF: 1,
      parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ __name(function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ __name(function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ __name(function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ __name(function() {
        this._more = true;
        return this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ __name(function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ __name(function(n) {
        this.unput(this.match.slice(n));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ __name(function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ __name(function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ __name(function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ __name(function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ __name(function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ __name(function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ __name(function begin(condition) {
        this.conditionStack.push(condition);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ __name(function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ __name(function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ __name(function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ __name(function pushState(condition) {
        this.begin(condition);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ __name(function stateStackSize() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ __name(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            return 5;
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            return 19;
            break;
          case 7:
            this.begin("CONFIG");
            return 73;
            break;
          case 8:
            return 74;
            break;
          case 9:
            this.popState();
            this.popState();
            return 75;
            break;
          case 10:
            yy_.yytext = yy_.yytext.trim();
            return 71;
            break;
          case 11:
            yy_.yytext = yy_.yytext.trim();
            this.begin("ALIAS");
            return 71;
            break;
          case 12:
            this.begin("LINE");
            return 14;
            break;
          case 13:
            this.begin("ID");
            return 50;
            break;
          case 14:
            this.begin("ID");
            return 52;
            break;
          case 15:
            return 13;
            break;
          case 16:
            this.begin("ID");
            return 53;
            break;
          case 17:
            yy_.yytext = yy_.yytext.trim();
            this.begin("ALIAS");
            return 71;
            break;
          case 18:
            this.popState();
            this.popState();
            this.begin("LINE");
            return 51;
            break;
          case 19:
            this.popState();
            this.popState();
            return 5;
            break;
          case 20:
            this.begin("LINE");
            return 36;
            break;
          case 21:
            this.begin("LINE");
            return 37;
            break;
          case 22:
            this.begin("LINE");
            return 38;
            break;
          case 23:
            this.begin("LINE");
            return 39;
            break;
          case 24:
            this.begin("LINE");
            return 49;
            break;
          case 25:
            this.begin("LINE");
            return 41;
            break;
          case 26:
            this.begin("LINE");
            return 43;
            break;
          case 27:
            this.begin("LINE");
            return 48;
            break;
          case 28:
            this.begin("LINE");
            return 44;
            break;
          case 29:
            this.begin("LINE");
            return 47;
            break;
          case 30:
            this.begin("LINE");
            return 46;
            break;
          case 31:
            this.popState();
            return 15;
            break;
          case 32:
            return 16;
            break;
          case 33:
            return 66;
            break;
          case 34:
            return 67;
            break;
          case 35:
            return 60;
            break;
          case 36:
            return 61;
            break;
          case 37:
            return 62;
            break;
          case 38:
            return 63;
            break;
          case 39:
            return 58;
            break;
          case 40:
            return 55;
            break;
          case 41:
            this.begin("ID");
            return 21;
            break;
          case 42:
            this.begin("ID");
            return 23;
            break;
          case 43:
            return 29;
            break;
          case 44:
            return 30;
            break;
          case 45:
            this.begin("acc_title");
            return 31;
            break;
          case 46:
            this.popState();
            return "acc_title_value";
            break;
          case 47:
            this.begin("acc_descr");
            return 33;
            break;
          case 48:
            this.popState();
            return "acc_descr_value";
            break;
          case 49:
            this.begin("acc_descr_multiline");
            break;
          case 50:
            this.popState();
            break;
          case 51:
            return "acc_descr_multiline_value";
            break;
          case 52:
            return 6;
            break;
          case 53:
            return 18;
            break;
          case 54:
            return 20;
            break;
          case 55:
            return 65;
            break;
          case 56:
            return 5;
            break;
          case 57:
            yy_.yytext = yy_.yytext.trim();
            return 71;
            break;
          case 58:
            return 78;
            break;
          case 59:
            return 79;
            break;
          case 60:
            return 80;
            break;
          case 61:
            return 81;
            break;
          case 62:
            return 76;
            break;
          case 63:
            return 77;
            break;
          case 64:
            return 82;
            break;
          case 65:
            return 83;
            break;
          case 66:
            return 84;
            break;
          case 67:
            return 85;
            break;
          case 68:
            return 86;
            break;
          case 69:
            return 86;
            break;
          case 70:
            return 69;
            break;
          case 71:
            return 70;
            break;
          case 72:
            return 5;
            break;
          case 73:
            return "INVALID";
            break;
        }
      }, "anonymous"),
      rules: [/^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:@\{)/i, /^(?:[^\}]+)/i, /^(?:\})/i, /^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i, /^(?:[^\<->\->:\n,;@]+?([\-]*[^\<->\->:\n,;@]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:create\b)/i, /^(?:destroy\b)/i, /^(?:[^<\->\->:\n,;]+?([\-]*[^<\->\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+<\->\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:<<->>)/i, /^(?:-->>)/i, /^(?:<<-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]*)/i, /^(?::)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [50, 51], "inclusive": false }, "acc_descr": { "rules": [48], "inclusive": false }, "acc_title": { "rules": [46], "inclusive": false }, "ID": { "rules": [2, 3, 7, 10, 11, 17], "inclusive": false }, "ALIAS": { "rules": [2, 3, 18, 19], "inclusive": false }, "LINE": { "rules": [2, 3, 31], "inclusive": false }, "CONFIG": { "rules": [8, 9], "inclusive": false }, "CONFIG_DATA": { "rules": [], "inclusive": false }, "INITIAL": { "rules": [0, 1, 3, 4, 5, 6, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73], "inclusive": true } }
    };
    return lexer2;
  })();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  __name(Parser, "Parser");
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
})();

return { flow, sequence };
})();
