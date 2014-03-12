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
#include "JSDOMStringMap.h"

#include "DOMStringMap.h"
#include "Element.h"
#include "JSNodeCustom.h"
#include "wtf/text/AtomicString.h"
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSDOMStringMapTableValues[] =
{
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsDOMStringMapConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMStringMapTable = { 2, 1, JSDOMStringMapTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSDOMStringMapConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMStringMapConstructorTable = { 1, 0, JSDOMStringMapConstructorTableValues, 0 };
const ClassInfo JSDOMStringMapConstructor::s_info = { "DOMStringMapConstructor", &Base::s_info, &JSDOMStringMapConstructorTable, 0, CREATE_METHOD_TABLE(JSDOMStringMapConstructor) };

JSDOMStringMapConstructor::JSDOMStringMapConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSDOMStringMapConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSDOMStringMapPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSDOMStringMapConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSDOMStringMapConstructor, JSDOMWrapper>(exec, JSDOMStringMapConstructorTable, jsCast<JSDOMStringMapConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSDOMStringMapPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMStringMapPrototypeTable = { 1, 0, JSDOMStringMapPrototypeTableValues, 0 };
const ClassInfo JSDOMStringMapPrototype::s_info = { "DOMStringMapPrototype", &Base::s_info, &JSDOMStringMapPrototypeTable, 0, CREATE_METHOD_TABLE(JSDOMStringMapPrototype) };

JSObject* JSDOMStringMapPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSDOMStringMap>(vm, globalObject);
}

const ClassInfo JSDOMStringMap::s_info = { "DOMStringMap", &Base::s_info, &JSDOMStringMapTable, 0 , CREATE_METHOD_TABLE(JSDOMStringMap) };

JSDOMStringMap::JSDOMStringMap(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<DOMStringMap> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSDOMStringMap::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSDOMStringMap::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSDOMStringMapPrototype::create(vm, globalObject, JSDOMStringMapPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSDOMStringMap::destroy(JSC::JSCell* cell)
{
    JSDOMStringMap* thisObject = static_cast<JSDOMStringMap*>(cell);
    thisObject->JSDOMStringMap::~JSDOMStringMap();
}

JSDOMStringMap::~JSDOMStringMap()
{
    releaseImplIfNotNull();
}

bool JSDOMStringMap::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSDOMStringMap* thisObject = jsCast<JSDOMStringMap*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    const HashEntry* entry = getStaticValueSlotEntryWithoutCaching<JSDOMStringMap>(exec, propertyName);
    if (entry) {
        slot.setCustom(thisObject, entry->attributes(), entry->propertyGetter());
        return true;
    }
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return getStaticValueSlot<JSDOMStringMap, Base>(exec, JSDOMStringMapTable, thisObject, propertyName, slot);
}

bool JSDOMStringMap::getOwnPropertySlotByIndex(JSObject* object, ExecState* exec, unsigned index, PropertySlot& slot)
{
    JSDOMStringMap* thisObject = jsCast<JSDOMStringMap*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    PropertyName propertyName = Identifier::from(exec, index);
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return Base::getOwnPropertySlotByIndex(thisObject, exec, index, slot);
}

EncodedJSValue jsDOMStringMapConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSDOMStringMap* domObject = jsDynamicCast<JSDOMStringMap*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSDOMStringMap::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSDOMStringMap::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSDOMStringMap* thisObject = jsCast<JSDOMStringMap*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    if (thisObject->putDelegate(exec, propertyName, value, slot))
        return;
    Base::put(thisObject, exec, propertyName, value, slot);
}

void JSDOMStringMap::putByIndex(JSCell* cell, ExecState* exec, unsigned index, JSValue value, bool shouldThrow)
{
    JSDOMStringMap* thisObject = jsCast<JSDOMStringMap*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    PropertyName propertyName = Identifier::from(exec, index);
    PutPropertySlot slot(thisObject, shouldThrow);
    if (thisObject->putDelegate(exec, propertyName, value, slot))
        return;
    Base::putByIndex(cell, exec, index, value, shouldThrow);
}

JSValue JSDOMStringMap::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSDOMStringMapConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

static inline bool isObservable(JSDOMStringMap* jsDOMStringMap)
{
    if (jsDOMStringMap->hasCustomProperties())
        return true;
    return false;
}

bool JSDOMStringMapOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSDOMStringMap* jsDOMStringMap = jsCast<JSDOMStringMap*>(handle.get().asCell());
    if (!isObservable(jsDOMStringMap))
        return false;
    Element* element = jsDOMStringMap->impl().element();
    if (!element)
        return false;
    void* root = WebCore::root(element);
    return visitor.containsOpaqueRoot(root);
}

void JSDOMStringMapOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSDOMStringMap* jsDOMStringMap = jsCast<JSDOMStringMap*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsDOMStringMap->impl(), jsDOMStringMap);
    jsDOMStringMap->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, DOMStringMap* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSDOMStringMap>(exec, impl))
        return result;
    ReportMemoryCost<DOMStringMap>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSDOMStringMap>(exec, globalObject, impl);
}

DOMStringMap* toDOMStringMap(JSC::JSValue value)
{
    return value.inherits(JSDOMStringMap::info()) ? &jsCast<JSDOMStringMap*>(value)->impl() : 0;
}

}