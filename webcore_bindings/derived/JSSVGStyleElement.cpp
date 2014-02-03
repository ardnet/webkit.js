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

#if ENABLE(SVG)

#include "JSSVGStyleElement.h"

#include "SVGStyleElement.h"
#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGStyleElementTableValues[] =
{
    { "disabled", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGStyleElementDisabled), (intptr_t)setJSSVGStyleElementDisabled },
    { "type", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGStyleElementType), (intptr_t)setJSSVGStyleElementType },
    { "media", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGStyleElementMedia), (intptr_t)setJSSVGStyleElementMedia },
    { "title", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGStyleElementTitle), (intptr_t)setJSSVGStyleElementTitle },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGStyleElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGStyleElementTable = { 17, 15, JSSVGStyleElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGStyleElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGStyleElementConstructorTable = { 1, 0, JSSVGStyleElementConstructorTableValues, 0 };
const ClassInfo JSSVGStyleElementConstructor::s_info = { "SVGStyleElementConstructor", &Base::s_info, &JSSVGStyleElementConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGStyleElementConstructor) };

JSSVGStyleElementConstructor::JSSVGStyleElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGStyleElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGStyleElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGStyleElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGStyleElementConstructor, JSDOMWrapper>(exec, JSSVGStyleElementConstructorTable, jsCast<JSSVGStyleElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGStyleElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGStyleElementPrototypeTable = { 1, 0, JSSVGStyleElementPrototypeTableValues, 0 };
const ClassInfo JSSVGStyleElementPrototype::s_info = { "SVGStyleElementPrototype", &Base::s_info, &JSSVGStyleElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGStyleElementPrototype) };

JSObject* JSSVGStyleElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGStyleElement>(vm, globalObject);
}

const ClassInfo JSSVGStyleElement::s_info = { "SVGStyleElement", &Base::s_info, &JSSVGStyleElementTable, 0 , CREATE_METHOD_TABLE(JSSVGStyleElement) };

JSSVGStyleElement::JSSVGStyleElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGStyleElement> impl)
    : JSSVGElement(structure, globalObject, impl)
{
}

void JSSVGStyleElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGStyleElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGStyleElementPrototype::create(vm, globalObject, JSSVGStyleElementPrototype::createStructure(vm, globalObject, JSSVGElementPrototype::self(vm, globalObject)));
}

bool JSSVGStyleElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGStyleElement* thisObject = jsCast<JSSVGStyleElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGStyleElement, Base>(exec, JSSVGStyleElementTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGStyleElementDisabled(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGStyleElement& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.disabled());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGStyleElementType(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGStyleElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.type());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGStyleElementMedia(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGStyleElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.media());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGStyleElementTitle(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGStyleElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.title());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGStyleElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGStyleElement* domObject = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGStyleElement::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSSVGStyleElement::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSSVGStyleElement* thisObject = jsCast<JSSVGStyleElement*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSSVGStyleElement, Base>(exec, propertyName, value, JSSVGStyleElementTable, thisObject, slot);
}

void setJSSVGStyleElementDisabled(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGStyleElement& impl = castedThis->impl();
    bool nativeValue(value.toBoolean(exec));
    if (exec->hadException())
        return;
    impl.setDisabled(nativeValue);
}


void setJSSVGStyleElementType(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGStyleElement& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String& nativeValue(value.isEmpty() ? String() : value.toString(exec)->value(exec));
    if (exec->hadException())
        return;
    impl.setType(nativeValue, ec);
    setDOMException(exec, ec);
}


void setJSSVGStyleElementMedia(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGStyleElement& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String& nativeValue(value.isEmpty() ? String() : value.toString(exec)->value(exec));
    if (exec->hadException())
        return;
    impl.setMedia(nativeValue, ec);
    setDOMException(exec, ec);
}


void setJSSVGStyleElementTitle(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGStyleElement* castedThis = jsDynamicCast<JSSVGStyleElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGStyleElement& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String& nativeValue(value.isEmpty() ? String() : value.toString(exec)->value(exec));
    if (exec->hadException())
        return;
    impl.setTitle(nativeValue, ec);
    setDOMException(exec, ec);
}


JSValue JSSVGStyleElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGStyleElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)