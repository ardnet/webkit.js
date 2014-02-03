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
#include "JSCSSMediaRule.h"

#include "CSSMediaRule.h"
#include "CSSRuleList.h"
#include "ExceptionCode.h"
#include "JSCSSRuleList.h"
#include "JSDOMBinding.h"
#include "JSMediaList.h"
#include "MediaList.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSCSSMediaRuleTableValues[] =
{
    { "media", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSMediaRuleMedia), (intptr_t)0 },
    { "cssRules", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSMediaRuleCssRules), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsCSSMediaRuleConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSMediaRuleTable = { 8, 7, JSCSSMediaRuleTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSCSSMediaRuleConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSMediaRuleConstructorTable = { 1, 0, JSCSSMediaRuleConstructorTableValues, 0 };
const ClassInfo JSCSSMediaRuleConstructor::s_info = { "CSSMediaRuleConstructor", &Base::s_info, &JSCSSMediaRuleConstructorTable, 0, CREATE_METHOD_TABLE(JSCSSMediaRuleConstructor) };

JSCSSMediaRuleConstructor::JSCSSMediaRuleConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSCSSMediaRuleConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSCSSMediaRulePrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSCSSMediaRuleConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSCSSMediaRuleConstructor, JSDOMWrapper>(exec, JSCSSMediaRuleConstructorTable, jsCast<JSCSSMediaRuleConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSCSSMediaRulePrototypeTableValues[] =
{
    { "insertRule", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSMediaRulePrototypeFunctionInsertRule), (intptr_t)0 },
    { "deleteRule", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsCSSMediaRulePrototypeFunctionDeleteRule), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSCSSMediaRulePrototypeTable = { 4, 3, JSCSSMediaRulePrototypeTableValues, 0 };
const ClassInfo JSCSSMediaRulePrototype::s_info = { "CSSMediaRulePrototype", &Base::s_info, &JSCSSMediaRulePrototypeTable, 0, CREATE_METHOD_TABLE(JSCSSMediaRulePrototype) };

JSObject* JSCSSMediaRulePrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSCSSMediaRule>(vm, globalObject);
}

bool JSCSSMediaRulePrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSCSSMediaRulePrototype* thisObject = jsCast<JSCSSMediaRulePrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSCSSMediaRulePrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSCSSMediaRule::s_info = { "CSSMediaRule", &Base::s_info, &JSCSSMediaRuleTable, 0 , CREATE_METHOD_TABLE(JSCSSMediaRule) };

JSCSSMediaRule::JSCSSMediaRule(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<CSSMediaRule> impl)
    : JSCSSRule(structure, globalObject, impl)
{
}

void JSCSSMediaRule::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSCSSMediaRule::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSCSSMediaRulePrototype::create(vm, globalObject, JSCSSMediaRulePrototype::createStructure(vm, globalObject, JSCSSRulePrototype::self(vm, globalObject)));
}

bool JSCSSMediaRule::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSCSSMediaRule* thisObject = jsCast<JSCSSMediaRule*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSCSSMediaRule, Base>(exec, JSCSSMediaRuleTable, thisObject, propertyName, slot);
}

EncodedJSValue jsCSSMediaRuleMedia(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSCSSMediaRule* castedThis = jsDynamicCast<JSCSSMediaRule*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    CSSMediaRule& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.media()));
    return JSValue::encode(result);
}


EncodedJSValue jsCSSMediaRuleCssRules(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSCSSMediaRule* castedThis = jsDynamicCast<JSCSSMediaRule*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    CSSMediaRule& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.cssRules()));
    return JSValue::encode(result);
}


EncodedJSValue jsCSSMediaRuleConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSCSSMediaRule* domObject = jsDynamicCast<JSCSSMediaRule*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSCSSMediaRule::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSCSSMediaRule::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSCSSMediaRuleConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsCSSMediaRulePrototypeFunctionInsertRule(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSMediaRule* castedThis = jsDynamicCast<JSCSSMediaRule*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSMediaRule::info());
    CSSMediaRule& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String& rule(exec->argument(0).isEmpty() ? String() : exec->argument(0).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    unsigned index(toUInt32(exec, exec->argument(1), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = jsNumber(impl.insertRule(rule, index, ec));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsCSSMediaRulePrototypeFunctionDeleteRule(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSCSSMediaRule* castedThis = jsDynamicCast<JSCSSMediaRule*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSCSSMediaRule::info());
    CSSMediaRule& impl = castedThis->impl();
    ExceptionCode ec = 0;
    unsigned index(toUInt32(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    impl.deleteRule(index, ec);
    setDOMException(exec, ec);
    return JSValue::encode(jsUndefined());
}


}