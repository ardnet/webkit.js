/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"
#include "JSCSSPrimitiveValue.h"

#include "CSSPrimitiveValue.h"
#include "Counter.h"
#include "ExceptionCode.h"
#include "JSCounter.h"
#include "JSDOMBinding.h"
#include "JSRGBColor.h"
#include "JSRect.h"
#include "RGBColor.h"
#include "Rect.h"
#include "URL.h"
#include <runtime/Error.h>
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSCSSPrimitiveValueTableValues[] =
{
    { "primitiveType", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValuePrimitiveType), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSPrimitiveValueTable = { 4, 3, JSCSSPrimitiveValueTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSCSSPrimitiveValueConstructorTableValues[] =
{
    { "CSS_UNKNOWN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_UNKNOWN), (intptr_t)0 },
    { "CSS_NUMBER", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_NUMBER), (intptr_t)0 },
    { "CSS_PERCENTAGE", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PERCENTAGE), (intptr_t)0 },
    { "CSS_EMS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_EMS), (intptr_t)0 },
    { "CSS_EXS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_EXS), (intptr_t)0 },
    { "CSS_PX", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PX), (intptr_t)0 },
    { "CSS_CM", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_CM), (intptr_t)0 },
    { "CSS_MM", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_MM), (intptr_t)0 },
    { "CSS_IN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_IN), (intptr_t)0 },
    { "CSS_PT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PT), (intptr_t)0 },
    { "CSS_PC", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PC), (intptr_t)0 },
    { "CSS_DEG", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_DEG), (intptr_t)0 },
    { "CSS_RAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RAD), (intptr_t)0 },
    { "CSS_GRAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_GRAD), (intptr_t)0 },
    { "CSS_MS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_MS), (intptr_t)0 },
    { "CSS_S", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_S), (intptr_t)0 },
    { "CSS_HZ", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_HZ), (intptr_t)0 },
    { "CSS_KHZ", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_KHZ), (intptr_t)0 },
    { "CSS_DIMENSION", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_DIMENSION), (intptr_t)0 },
    { "CSS_STRING", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_STRING), (intptr_t)0 },
    { "CSS_URI", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_URI), (intptr_t)0 },
    { "CSS_IDENT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_IDENT), (intptr_t)0 },
    { "CSS_ATTR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_ATTR), (intptr_t)0 },
    { "CSS_COUNTER", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_COUNTER), (intptr_t)0 },
    { "CSS_RECT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RECT), (intptr_t)0 },
    { "CSS_RGBCOLOR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RGBCOLOR), (intptr_t)0 },
    { "CSS_VW", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VW), (intptr_t)0 },
    { "CSS_VH", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VH), (intptr_t)0 },
    { "CSS_VMIN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VMIN), (intptr_t)0 },
    { "CSS_VMAX", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VMAX), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSPrimitiveValueConstructorTable = { 71, 63, JSCSSPrimitiveValueConstructorTableValues, 0 };

COMPILE_ASSERT(0 == CSSPrimitiveValue::CSS_UNKNOWN, CSSPrimitiveValueEnumCSS_UNKNOWNIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(1 == CSSPrimitiveValue::CSS_NUMBER, CSSPrimitiveValueEnumCSS_NUMBERIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(2 == CSSPrimitiveValue::CSS_PERCENTAGE, CSSPrimitiveValueEnumCSS_PERCENTAGEIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(3 == CSSPrimitiveValue::CSS_EMS, CSSPrimitiveValueEnumCSS_EMSIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(4 == CSSPrimitiveValue::CSS_EXS, CSSPrimitiveValueEnumCSS_EXSIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(5 == CSSPrimitiveValue::CSS_PX, CSSPrimitiveValueEnumCSS_PXIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(6 == CSSPrimitiveValue::CSS_CM, CSSPrimitiveValueEnumCSS_CMIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(7 == CSSPrimitiveValue::CSS_MM, CSSPrimitiveValueEnumCSS_MMIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(8 == CSSPrimitiveValue::CSS_IN, CSSPrimitiveValueEnumCSS_INIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(9 == CSSPrimitiveValue::CSS_PT, CSSPrimitiveValueEnumCSS_PTIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(10 == CSSPrimitiveValue::CSS_PC, CSSPrimitiveValueEnumCSS_PCIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(11 == CSSPrimitiveValue::CSS_DEG, CSSPrimitiveValueEnumCSS_DEGIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(12 == CSSPrimitiveValue::CSS_RAD, CSSPrimitiveValueEnumCSS_RADIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(13 == CSSPrimitiveValue::CSS_GRAD, CSSPrimitiveValueEnumCSS_GRADIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(14 == CSSPrimitiveValue::CSS_MS, CSSPrimitiveValueEnumCSS_MSIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(15 == CSSPrimitiveValue::CSS_S, CSSPrimitiveValueEnumCSS_SIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(16 == CSSPrimitiveValue::CSS_HZ, CSSPrimitiveValueEnumCSS_HZIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(17 == CSSPrimitiveValue::CSS_KHZ, CSSPrimitiveValueEnumCSS_KHZIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(18 == CSSPrimitiveValue::CSS_DIMENSION, CSSPrimitiveValueEnumCSS_DIMENSIONIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(19 == CSSPrimitiveValue::CSS_STRING, CSSPrimitiveValueEnumCSS_STRINGIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(20 == CSSPrimitiveValue::CSS_URI, CSSPrimitiveValueEnumCSS_URIIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(21 == CSSPrimitiveValue::CSS_IDENT, CSSPrimitiveValueEnumCSS_IDENTIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(22 == CSSPrimitiveValue::CSS_ATTR, CSSPrimitiveValueEnumCSS_ATTRIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(23 == CSSPrimitiveValue::CSS_COUNTER, CSSPrimitiveValueEnumCSS_COUNTERIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(24 == CSSPrimitiveValue::CSS_RECT, CSSPrimitiveValueEnumCSS_RECTIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(25 == CSSPrimitiveValue::CSS_RGBCOLOR, CSSPrimitiveValueEnumCSS_RGBCOLORIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(26 == CSSPrimitiveValue::CSS_VW, CSSPrimitiveValueEnumCSS_VWIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(27 == CSSPrimitiveValue::CSS_VH, CSSPrimitiveValueEnumCSS_VHIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(28 == CSSPrimitiveValue::CSS_VMIN, CSSPrimitiveValueEnumCSS_VMINIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(29 == CSSPrimitiveValue::CSS_VMAX, CSSPrimitiveValueEnumCSS_VMAXIsWrongUseDoNotCheckConstants);

const ClassInfo JSCSSPrimitiveValueConstructor::s_info = { "CSSPrimitiveValueConstructor", &Base::s_info, &JSCSSPrimitiveValueConstructorTable, 0, CREATE_METHOD_TABLE(JSCSSPrimitiveValueConstructor) };

JSCSSPrimitiveValueConstructor::JSCSSPrimitiveValueConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSCSSPrimitiveValueConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSCSSPrimitiveValuePrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSCSSPrimitiveValueConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSCSSPrimitiveValueConstructor, JSDOMWrapper>(exec, JSCSSPrimitiveValueConstructorTable, jsCast<JSCSSPrimitiveValueConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSCSSPrimitiveValuePrototypeTableValues[] =
{
    { "CSS_UNKNOWN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_UNKNOWN), (intptr_t)0 },
    { "CSS_NUMBER", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_NUMBER), (intptr_t)0 },
    { "CSS_PERCENTAGE", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PERCENTAGE), (intptr_t)0 },
    { "CSS_EMS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_EMS), (intptr_t)0 },
    { "CSS_EXS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_EXS), (intptr_t)0 },
    { "CSS_PX", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PX), (intptr_t)0 },
    { "CSS_CM", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_CM), (intptr_t)0 },
    { "CSS_MM", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_MM), (intptr_t)0 },
    { "CSS_IN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_IN), (intptr_t)0 },
    { "CSS_PT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PT), (intptr_t)0 },
    { "CSS_PC", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_PC), (intptr_t)0 },
    { "CSS_DEG", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_DEG), (intptr_t)0 },
    { "CSS_RAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RAD), (intptr_t)0 },
    { "CSS_GRAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_GRAD), (intptr_t)0 },
    { "CSS_MS", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_MS), (intptr_t)0 },
    { "CSS_S", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_S), (intptr_t)0 },
    { "CSS_HZ", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_HZ), (intptr_t)0 },
    { "CSS_KHZ", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_KHZ), (intptr_t)0 },
    { "CSS_DIMENSION", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_DIMENSION), (intptr_t)0 },
    { "CSS_STRING", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_STRING), (intptr_t)0 },
    { "CSS_URI", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_URI), (intptr_t)0 },
    { "CSS_IDENT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_IDENT), (intptr_t)0 },
    { "CSS_ATTR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_ATTR), (intptr_t)0 },
    { "CSS_COUNTER", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_COUNTER), (intptr_t)0 },
    { "CSS_RECT", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RECT), (intptr_t)0 },
    { "CSS_RGBCOLOR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_RGBCOLOR), (intptr_t)0 },
    { "CSS_VW", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VW), (intptr_t)0 },
    { "CSS_VH", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VH), (intptr_t)0 },
    { "CSS_VMIN", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VMIN), (intptr_t)0 },
    { "CSS_VMAX", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSPrimitiveValueCSS_VMAX), (intptr_t)0 },
    { "setFloatValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionSetFloatValue), (intptr_t)0 },
    { "getFloatValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionGetFloatValue), (intptr_t)0 },
    { "setStringValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionSetStringValue), (intptr_t)0 },
    { "getStringValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionGetStringValue), (intptr_t)0 },
    { "getCounterValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionGetCounterValue), (intptr_t)0 },
    { "getRectValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionGetRectValue), (intptr_t)0 },
    { "getRGBColorValue", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSPrimitiveValuePrototypeFunctionGetRGBColorValue), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSPrimitiveValuePrototypeTable = { 132, 127, JSCSSPrimitiveValuePrototypeTableValues, 0 };
const ClassInfo JSCSSPrimitiveValuePrototype::s_info = { "CSSPrimitiveValuePrototype", &Base::s_info, &JSCSSPrimitiveValuePrototypeTable, 0, CREATE_METHOD_TABLE(JSCSSPrimitiveValuePrototype) };

JSObject* JSCSSPrimitiveValuePrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSCSSPrimitiveValue>(vm, globalObject);
}

bool JSCSSPrimitiveValuePrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSCSSPrimitiveValuePrototype* thisObject = jsCast<JSCSSPrimitiveValuePrototype*>(object);
    return getStaticPropertySlot<JSCSSPrimitiveValuePrototype, JSObject>(exec, JSCSSPrimitiveValuePrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSCSSPrimitiveValue::s_info = { "CSSPrimitiveValue", &Base::s_info, &JSCSSPrimitiveValueTable, 0 , CREATE_METHOD_TABLE(JSCSSPrimitiveValue) };

JSCSSPrimitiveValue::JSCSSPrimitiveValue(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<CSSPrimitiveValue> impl)
    : JSCSSValue(structure, globalObject, impl)
{
}

void JSCSSPrimitiveValue::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSCSSPrimitiveValue::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSCSSPrimitiveValuePrototype::create(vm, globalObject, JSCSSPrimitiveValuePrototype::createStructure(vm, globalObject, JSCSSValuePrototype::self(vm, globalObject)));
}

bool JSCSSPrimitiveValue::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSCSSPrimitiveValue* thisObject = jsCast<JSCSSPrimitiveValue*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSCSSPrimitiveValue, Base>(exec, JSCSSPrimitiveValueTable, thisObject, propertyName, slot);
}

EncodedJSValue jsCSSPrimitiveValuePrimitiveType(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    CSSPrimitiveValue& impl = castedThis->impl();
    JSValue result = jsNumber(impl.primitiveType());
    return JSValue::encode(result);
}


EncodedJSValue jsCSSPrimitiveValueConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSCSSPrimitiveValue* domObject = jsDynamicCast<JSCSSPrimitiveValue*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSCSSPrimitiveValue::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSCSSPrimitiveValue::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSCSSPrimitiveValueConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionSetFloatValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;
    uint16_t unitType(toUInt16(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    float floatValue(exec->argument(1).toFloat(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    impl.setFloatValue(unitType, floatValue, ec);
    setDOMException(exec, ec);
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionGetFloatValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;
    uint16_t unitType(toUInt16(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = jsNumber(impl.getFloatValue(unitType, ec));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionSetStringValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;
    uint16_t stringType(toUInt16(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    const String& stringValue(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    impl.setStringValue(stringType, stringValue, ec);
    setDOMException(exec, ec);
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionGetStringValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;

    JSC::JSValue result = jsStringWithCache(exec, impl.getStringValue(ec));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionGetCounterValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.getCounterValue(ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionGetRectValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.getRectValue(ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsCSSPrimitiveValuePrototypeFunctionGetRGBColorValue(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSPrimitiveValue* castedThis = jsDynamicCast<JSCSSPrimitiveValue*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSPrimitiveValue::info());
    CSSPrimitiveValue& impl = castedThis->impl();
    ExceptionCode ec = 0;

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.getRGBColorValue(ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

// Constant getters

EncodedJSValue jsCSSPrimitiveValueCSS_UNKNOWN(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(0)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_NUMBER(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(1)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_PERCENTAGE(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(2)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_EMS(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(3)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_EXS(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(4)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_PX(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(5)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_CM(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(6)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_MM(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(7)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_IN(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(8)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_PT(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(9)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_PC(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(10)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_DEG(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(11)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_RAD(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(12)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_GRAD(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(13)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_MS(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(14)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_S(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(15)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_HZ(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(16)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_KHZ(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(17)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_DIMENSION(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(18)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_STRING(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(19)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_URI(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(20)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_IDENT(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(21)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_ATTR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(22)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_COUNTER(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(23)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_RECT(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(24)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_RGBCOLOR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(25)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_VW(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(26)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_VH(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(27)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_VMIN(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(28)));
}

EncodedJSValue jsCSSPrimitiveValueCSS_VMAX(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(29)));
}


}