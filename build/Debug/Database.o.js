// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](288 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 288;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8DatabaseC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m;
var __ZN7WebCore8DatabaseD1Ev;
/* memory initializer */ allocate([83,69,76,69,67,84,32,110,97,109,101,32,70,82,79,77,32,115,113,108,105,116,101,95,109,97,115,116,101,114,32,87,72,69,82,69,32,116,121,112,101,61,39,116,97,98,108,101,39,59,0,0,0,0,0,0,100,97,116,97,98,97,115,101,32,104,97,115,32,98,101,101,110,32,99,108,111,115,101,100,0,0,0,0,0,0,0,0,102,111,114,99,105,98,108,121,32,99,108,111,115,105,110,103,32,100,97,116,97,98,97,115,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore13SQLResultDoneE=env.__ZN7WebCore13SQLResultDoneE|0;
  var __ZN7WebCore11SQLResultOkE=env.__ZN7WebCore11SQLResultOkE|0;
  var __ZN7WebCore12SQLResultRowE=env.__ZN7WebCore12SQLResultRowE|0;
  var __ZTVN7WebCore15DatabaseBackendE=env.__ZTVN7WebCore15DatabaseBackendE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16DerefContextTaskE=(H_BASE+232)|0;
  var __ZTVN7WebCore8DatabaseE=(H_BASE+128)|0;
  var __ZTVN7WebCore26DeliverPendingCallbackTaskE=(H_BASE+200)|0;
  var __ZTVN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_EE=(H_BASE+264)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore8Database20performGetTableNamesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i2 | 0;
 __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(i7);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i4, i2 + 48 | 0, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i2 = __ZN7WebCore15SQLiteStatement7prepareEv(i4) | 0;
 if ((i2 | 0) != (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
  __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(i7);
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i2 = __ZN7WebCore15SQLiteStatement4stepEv(i4) | 0;
 L11 : do {
  if ((i2 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
   i8 = i6 | 0;
   i5 = i6;
   i9 = 0;
   i10 = 0;
   i11 = 0;
   L13 : while (1) {
    __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i4, 0);
    i12 = __ZN7WebCore19DatabaseBackendBase21databaseInfoTableNameEv() | 0;
    do {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, i12) | 0) {
      i13 = i11;
      i14 = i10;
      i15 = i9;
     } else {
      if ((i9 | 0) != (i10 | 0)) {
       i16 = HEAP32[i8 >> 2] | 0;
       HEAP32[i11 + (i9 << 2) >> 2] = i16;
       if ((i16 | 0) != 0) {
        i17 = i16 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
       }
       i13 = i11;
       i14 = i10;
       i15 = i9 + 1 | 0;
       break;
      }
      i17 = i10 + 1 | 0;
      do {
       if (i11 >>> 0 > i6 >>> 0) {
        i18 = 16;
       } else {
        if ((i11 + (i10 << 2) | 0) >>> 0 <= i6 >>> 0) {
         i18 = 16;
         break;
        }
        i16 = i5 - i11 >> 2;
        i19 = i17 + (i10 >>> 2) | 0;
        i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
        i19 = i20 >>> 0 > i17 >>> 0 ? i20 : i17;
        do {
         if (i10 >>> 0 < i19 >>> 0) {
          if (i19 >>> 0 > 1073741823 >>> 0) {
           i18 = 23;
           break L13;
          }
          i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
          i21 = i20 >>> 2;
          i22 = __ZN3WTF10fastMallocEj(i20) | 0;
          i20 = i22;
          i23 = i11;
          _memcpy(i22 | 0, i23 | 0, i10 << 2) | 0;
          if ((i11 | 0) == 0) {
           i24 = i20;
           i25 = i21;
           break;
          }
          i22 = (i20 | 0) == (i11 | 0);
          __ZN3WTF8fastFreeEPv(i23);
          i24 = i22 ? 0 : i20;
          i25 = i22 ? 0 : i21;
         } else {
          i24 = i11;
          i25 = i10;
         }
        } while (0);
        i26 = i24 + (i16 << 2) | 0;
        i27 = i24;
        i28 = i25;
       }
      } while (0);
      do {
       if ((i18 | 0) == 16) {
        i18 = 0;
        i19 = i17 + (i10 >>> 2) | 0;
        i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
        i19 = i21 >>> 0 > i17 >>> 0 ? i21 : i17;
        if (i10 >>> 0 >= i19 >>> 0) {
         i26 = i6;
         i27 = i11;
         i28 = i10;
         break;
        }
        if (i19 >>> 0 > 1073741823 >>> 0) {
         i18 = 18;
         break L13;
        }
        i21 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
        i19 = i21 >>> 2;
        i22 = __ZN3WTF10fastMallocEj(i21) | 0;
        i21 = i22;
        i20 = i11;
        _memcpy(i22 | 0, i20 | 0, i10 << 2) | 0;
        if ((i11 | 0) == 0) {
         i26 = i6;
         i27 = i21;
         i28 = i19;
         break;
        }
        i22 = (i21 | 0) == (i11 | 0);
        __ZN3WTF8fastFreeEPv(i20);
        i26 = i6;
        i27 = i22 ? 0 : i21;
        i28 = i22 ? 0 : i19;
       }
      } while (0);
      i19 = HEAP32[i26 >> 2] | 0;
      HEAP32[i27 + (i10 << 2) >> 2] = i19;
      if ((i19 | 0) == 0) {
       i13 = i27;
       i14 = i28;
       i15 = i17;
       break;
      }
      i22 = i19 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
      i13 = i27;
      i14 = i28;
      i15 = i17;
     }
    } while (0);
    i12 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i22 = i12 | 0;
      i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i22 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i12 = __ZN7WebCore15SQLiteStatement4stepEv(i4) | 0;
    if ((i12 | 0) == (i2 | 0)) {
     i9 = i15;
     i10 = i14;
     i11 = i13;
    } else {
     i29 = i15;
     i30 = i14;
     i31 = i13;
     i32 = i12;
     break L11;
    }
   }
   if ((i18 | 0) == 18) {
    _WTFCrash();
   } else if ((i18 | 0) == 23) {
    _WTFCrash();
   }
  } else {
   i29 = 0;
   i30 = 0;
   i31 = 0;
   i32 = i2;
  }
 } while (0);
 __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(i7);
 i7 = (i32 | 0) == (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0);
 i32 = i1 | 0;
 HEAP32[i32 >> 2] = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i18 = i1 + 8 | 0;
 if (i7) {
  HEAP32[i18 >> 2] = i29;
  HEAP32[i32 >> 2] = i31;
  HEAP32[i2 >> 2] = i30;
  __ZN7WebCore15SQLiteStatementD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 HEAP32[i18 >> 2] = 0;
 if ((i29 | 0) != 0) {
  i18 = i31 + (i29 << 2) | 0;
  i29 = i31;
  while (1) {
   i30 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i2 = i30 | 0;
     i32 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i2 >> 2] = i32;
      break;
     }
    }
   } while (0);
   i29 = i29 + 4 | 0;
   if ((i29 | 0) == (i18 | 0)) {
    break;
   }
  }
 }
 if ((i31 | 0) == 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i31);
 __ZN7WebCore15SQLiteStatementD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Database14runTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEEbPKNS_17ChangeVersionDataE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i3 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i9 | 0;
 i17 = i2 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i16 >> 2] = i2;
 i2 = i10 | 0;
 i17 = i4 | 0;
 i4 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 i4 = i11 | 0;
 HEAP32[i4 >> 2] = i3;
 i17 = (i3 | 0) == 0;
 if (!i17) {
  i18 = i3 + 4 | 0;
  tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore14SQLTransaction6createEPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb(i8, i1, i9, i10, i11, i5);
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 4 | 0;
   i10 = i4 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i10 = i4 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 + 4 | 0;
   i10 = i2 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i11 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i16 = i11 + 4 | 0;
   i4 = i16 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i11 = (i1 | 0) == 0;
 if (!i11) {
  i4 = i1 + 4 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = i13 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore15DatabaseBackend14runTransactionEN3WTF10PassRefPtrINS_14SQLTransactionEEEbPKNS_17ChangeVersionDataE(i12, i1 | 0, i13, i5, i6);
 i6 = i12 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 16 | 0;
   i5 = i4 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 do {
  if (!i11) {
   i6 = i1 + 4 | 0;
   i5 = i6 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   if (i17) {
    STACKTOP = i7;
    return;
   }
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 64 | 0);
   i11 = __ZN3WTF10fastMallocEj(12) | 0;
   i5 = i11;
   HEAP32[i11 >> 2] = 1;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZNKR3WTF6String12isolatedCopyEv(i11 + 8 | 0, i14);
   i11 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i6 = i11 | 0;
     i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i6 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i11 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i1 + 208 | 0) | 0;
   i4 = HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0;
   i6 = i3 + 4 | 0;
   tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
   i6 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i6 >> 2] = H_BASE + 272;
   HEAP32[i6 + 4 >> 2] = F_BASE_viii + 2;
   HEAP32[i6 + 8 >> 2] = i3;
   HEAP32[i6 + 12 >> 2] = i5;
   i13 = i15 | 0;
   HEAP32[i13 >> 2] = i6;
   FUNCTION_TABLE_vii[i4 & 31](i11, i15);
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
  } else {
   i11 = i12 + 16 | 0;
   i13 = i11 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
  }
 } while (0);
 if (i17) {
  STACKTOP = i7;
  return;
 }
 i17 = i3 + 4 | 0;
 i3 = i17 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 i3 = i17 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore8Database13changeVersionERKN3WTF6StringES4_NS1_10PassRefPtrINS_22SQLTransactionCallbackEEENS5_INS_27SQLTransactionErrorCallbackEEENS5_INS_12VoidCallbackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 i2 = (i12 | 0) == 0;
 if (!i2) {
  i13 = i12 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP32[i3 >> 2] | 0;
 i3 = (i13 | 0) == 0;
 if (!i3) {
  i14 = i13 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = i12;
 if (!i2) {
  i15 = i12 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = i8 + 4 | 0;
 HEAP32[i15 >> 2] = i13;
 do {
  if (!i3) {
   i16 = i13 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i17 + 2;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i13 = i12 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i12 = i9 | 0;
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 >> 2] = i4;
 i4 = i10 | 0;
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 >> 2] = i5;
 i5 = i11 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i5 >> 2] = i6;
 __ZN7WebCore8Database14runTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEEbPKNS_17ChangeVersionDataE(i1, i9, i10, i11, 0, i8);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 + 4 | 0;
   i11 = i5 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i11 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i10 = i4 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i10 = i4 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 4 | 0;
   i10 = i12 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i10 = i12 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i15 = i8 | 0;
   i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i15 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i14 = i8 | 0;
 i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i14 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore8DatabaseC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 208 | 0;
 i11 = i2 | 0;
 __ZN7WebCore12DatabaseBaseC2EPNS_22ScriptExecutionContextE(i10, HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0);
 i2 = i8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i12;
 __ZN7WebCore15DatabaseBackendC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1 | 0, i8, i3, i4, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 12 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 136;
 i6 = i1 + 212 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = __ZN7WebCore22DatabaseBackendContext8frontendEv(HEAP32[i1 + 12 >> 2] | 0) | 0;
 HEAP32[i1 + 216 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 12 | 0;
  tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 }
 HEAP8[i1 + 220 | 0] = 0;
 __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i9, HEAP32[i1 + 8 >> 2] | 0);
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = i1 + 36 | 0;
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
 i2 = i5 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i13 = i1 + 36 | 0;
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 i13 = i1 + 36 | 0;
 HEAP32[i13 >> 2] = i10;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore8DatabaseC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 208 | 0;
 i11 = i2 | 0;
 __ZN7WebCore12DatabaseBaseC2EPNS_22ScriptExecutionContextE(i10, HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0);
 i2 = i8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i12;
 __ZN7WebCore15DatabaseBackendC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1 | 0, i8, i3, i4, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 12 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 136;
 i6 = i1 + 212 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = __ZN7WebCore22DatabaseBackendContext8frontendEv(HEAP32[i1 + 12 >> 2] | 0) | 0;
 HEAP32[i1 + 216 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 12 | 0;
  tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 }
 HEAP8[i1 + 220 | 0] = 0;
 __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i9, HEAP32[i1 + 8 >> 2] | 0);
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = i1 + 36 | 0;
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
 i2 = i5 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i13 = i1 + 36 | 0;
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 i13 = i1 + 36 | 0;
 HEAP32[i13 >> 2] = i10;
 STACKTOP = i7;
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 16 | 0;
     i11 = i10 | 0;
     if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 16 | 0;
     i8 = i4 | 0;
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i4 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 2) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 2) | 0;
 while (1) {
  i13 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 + 16 | 0;
    i5 = i12 | 0;
    if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i5 = i12 - 4 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8DatabaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 136;
 i5 = i1 + 208 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 15](i6) | 0)) {
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i9 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i9 >> 2] = H_BASE + 240;
   HEAP32[i9 + 4 >> 2] = i7;
   i10 = i3 | 0;
   HEAP32[i10 >> 2] = i9;
   FUNCTION_TABLE_vii[i8 & 31](i7, i3);
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 12 | 0;
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i7 = i6 - 12 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i4 >> 2] = __ZTVN7WebCore15DatabaseBackendE + 8;
 __ZN3WTF5MutexD1Ev(i1 + 180 | 0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1 + 160 | 0);
 i4 = i1 + 168 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 172 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore19DatabaseBackendBaseD2Ev(i1 | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8DatabaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 136;
 i5 = i1 + 208 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 15](i6) | 0)) {
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i9 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i9 >> 2] = H_BASE + 240;
   HEAP32[i9 + 4 >> 2] = i7;
   i10 = i3 | 0;
   HEAP32[i10 >> 2] = i9;
   FUNCTION_TABLE_vii[i8 & 31](i7, i3);
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 12 | 0;
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i7 = i6 - 12 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i4 >> 2] = __ZTVN7WebCore15DatabaseBackendE + 8;
 __ZN3WTF5MutexD1Ev(i1 + 180 | 0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1 + 160 | 0);
 i4 = i1 + 168 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 172 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore19DatabaseBackendBaseD2Ev(i1 | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Database15readTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i6 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i7 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i8 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore8Database14runTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEEbPKNS_17ChangeVersionDataE(i1, i6, i7, i8, 1, 0);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i6 = i2 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i8 + 4 | 0;
 i8 = i9 | 0;
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 i8 = i9 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Database11transactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i6 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i7 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i8 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore8Database14runTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEEbPKNS_17ChangeVersionDataE(i1, i6, i7, i8, 0, 0);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i6 = i2 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i8 + 4 | 0;
 i8 = i9 | 0;
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 i8 = i9 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Database10tableNamesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 80 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore24DatabaseTaskSynchronizerC1Ev(i4);
 i6 = i2 + 216 | 0;
 if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0) == 0) {
  i7 = i4 + 28 | 0;
  __ZN3WTF15ThreadConditionD1Ev(i7);
  i8 = i4 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i8);
  STACKTOP = i3;
  return;
 }
 if (__ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0, i4) | 0) {
  i7 = i4 + 28 | 0;
  __ZN3WTF15ThreadConditionD1Ev(i7);
  i8 = i4 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i8);
  STACKTOP = i3;
  return;
 }
 i9 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore15DatabaseBackend22DatabaseTableNamesTaskC1EPS0_PNS_24DatabaseTaskSynchronizerERN3WTF6VectorINS5_6StringELj0ENS5_15CrashOnOverflowEEE(i9, i2 | 0, i4, i1);
 i1 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i9;
 __ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i1, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 __ZN7WebCore24DatabaseTaskSynchronizer21waitForTaskCompletionEv(i4);
 i7 = i4 + 28 | 0;
 __ZN3WTF15ThreadConditionD1Ev(i7);
 i8 = i4 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i4 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i9;
 i9 = i5 | 0;
 i8 = i1 + 12 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = i1;
 FUNCTION_TABLE_viii[i6 & 3](i2, i4, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i4 = i9 | 0;
     i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i4 >> 2] = i2;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 i5 = i7 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Database16closeImmediatelyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (__ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE(i5, 0) | 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 96 | 0);
 __ZN7WebCore12DatabaseBase15logErrorMessageERKN3WTF6StringE(i1 + 208 | 0, i3);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore15DatabaseBackend17DatabaseCloseTaskC1EPS0_PNS_24DatabaseTaskSynchronizerE(i6, i1 | 0, 0);
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i6;
 __ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i5, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Database21markAsDeletedAndCloseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 80 | 0;
 i5 = i1 + 220 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 216 | 0;
 if ((__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i5] = 1;
 __ZN7WebCore24DatabaseTaskSynchronizerC1Ev(i3);
 if (!(__ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0, i3) | 0)) {
  i5 = __ZN3WTF10fastMallocEj(12) | 0;
  __ZN7WebCore15DatabaseBackend17DatabaseCloseTaskC1EPS0_PNS_24DatabaseTaskSynchronizerE(i5, i1 | 0, i3);
  i1 = __ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i6 >> 2] | 0) | 0;
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i5;
  __ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i1, i4);
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  if ((i4 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
  __ZN7WebCore24DatabaseTaskSynchronizer21waitForTaskCompletionEv(i3);
 }
 __ZN3WTF15ThreadConditionD1Ev(i3 + 28 | 0);
 __ZN3WTF5MutexD1Ev(i3 + 4 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i3 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i4 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i3 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i4 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 6;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore8Database27scheduleTransactionCallbackEPNS_14SQLTransactionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 208 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = i2 + 16 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = H_BASE + 208;
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i6;
 FUNCTION_TABLE_vii[i1 & 31](i5, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26DeliverPendingCallbackTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 16 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26DeliverPendingCallbackTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 16 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZNK7WebCore8Database14securityOriginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 15](i2) | 0) {
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  return i3 | 0;
 }
 i2 = __ZN3WTF13currentThreadEv() | 0;
 if ((i2 | 0) != (HEAP32[(__ZN7WebCore15DatabaseContext14databaseThreadEv(HEAP32[i1 + 216 >> 2] | 0) | 0) + 28 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 return i3 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore8Database6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function __ZN7WebCoreL28callTransactionErrorCallbackEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEENS3_INS_8SQLErrorEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1, HEAP32[i3 >> 2] | 0) | 0;
 return;
}
function __ZN7WebCore16DerefContextTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iiiii___ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore16DerefContextTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16DerefContextTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore8Database7backendEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function __ZNK7WebCore8Database7versionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i2 + 220 | 0] & 1) == 0) {
  __ZNK7WebCore19DatabaseBackendBase7versionEv(i1, i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore26DeliverPendingCallbackTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14SQLTransaction22performPendingCallbackEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Database4fromEPNS_15DatabaseBackendE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2 - 208 | 0;
 return i3 | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase11displayNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase8fileNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase7detailsEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore8DatabaseD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8DatabaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore16DerefContextTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore15DatabaseBackend20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper,b0,iiiii___ZN7WebCore15DatabaseBackend20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore16DerefContextTaskD0Ev,b1,__ZN7WebCore26DeliverPendingCallbackTaskD1Ev,b1,__ZN7WebCore8Database16closeImmediatelyEv,b1,__ZN7WebCore26DeliverPendingCallbackTaskD0Ev,b1,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED1Ev,b1,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED0Ev,b1,__ZN7WebCore8DatabaseD0Ev,b1,__ZN7WebCore8Database21markAsDeletedAndCloseEv,b1,__ZN7WebCore8DatabaseD2Ev,b1,__ZN7WebCore16DerefContextTaskD1Ev,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore26DeliverPendingCallbackTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_E11performTaskEPNS_22ScriptExecutionContextE,b2,vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper,b2,__ZNK7WebCore8Database7versionEv,b2,vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper,b2,__ZN7WebCore16DerefContextTask11performTaskEPNS_22ScriptExecutionContextE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper,b3,__ZNK7WebCore8Database14securityOriginEv,b3,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b3,__ZNK7WebCore16DerefContextTask13isCleanupTaskEv,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCoreL28callTransactionErrorCallbackEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEENS3_INS_8SQLErrorEEE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore8DatabaseC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13SQLResultDoneE": __ZN7WebCore13SQLResultDoneE, "__ZN7WebCore11SQLResultOkE": __ZN7WebCore11SQLResultOkE, "__ZN7WebCore12SQLResultRowE": __ZN7WebCore12SQLResultRowE, "__ZTVN7WebCore15DatabaseBackendE": __ZTVN7WebCore15DatabaseBackendE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore16DerefContextTaskD0Ev","_strlen","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore26DeliverPendingCallbackTaskD1Ev","__ZN7WebCore26DeliverPendingCallbackTask11performTaskEPNS_22ScriptExecutionContextE","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv","__ZN7WebCore8Database7backendEv","__ZN7WebCore8Database16closeImmediatelyEv","__ZN7WebCore8Database14runTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEEbPKNS_17ChangeVersionDataE","__ZN7WebCore26DeliverPendingCallbackTaskD0Ev","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED1Ev","__ZN7WebCore8DatabaseD0Ev","__ZNK7WebCore8Database7versionEv","_memset","__ZN7WebCore8Database11transactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEES4_NS2_INS_8SQLErrorEEES6_ED0Ev","_memcpy","__ZN7WebCore8Database27scheduleTransactionCallbackEPNS_14SQLTransactionE","__ZNK7WebCore8Database14securityOriginEv","__ZN7WebCore14SecurityOriginD2Ev","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore8Database15readTransactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEE","__ZN7WebCore8DatabaseC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m","__ZN7WebCore8Database20performGetTableNamesEv","__ZN7WebCore8DatabaseD2Ev","__ZNK7WebCore16DerefContextTask13isCleanupTaskEv","__ZN7WebCoreL28callTransactionErrorCallbackEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_27SQLTransactionErrorCallbackEEENS3_INS_8SQLErrorEEE","__ZN7WebCore16DerefContextTaskD1Ev","__ZN7WebCore8Database13changeVersionERKN3WTF6StringES4_NS1_10PassRefPtrINS_22SQLTransactionCallbackEEENS5_INS_27SQLTransactionErrorCallbackEEENS5_INS_12VoidCallbackEEE","__ZN7WebCore8Database21markAsDeletedAndCloseEv","__ZN7WebCore8Database10tableNamesEv","__ZN7WebCore8Database4fromEPNS_15DatabaseBackendE","__ZN7WebCore16DerefContextTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore8Database6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE"]