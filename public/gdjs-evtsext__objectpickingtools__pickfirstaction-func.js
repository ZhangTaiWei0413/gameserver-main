
if (typeof gdjs.evtsExt__ObjectPickingTools__PickFirstAction !== "undefined") {
  gdjs.evtsExt__ObjectPickingTools__PickFirstAction.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectPickingTools__PickFirstAction = {};
gdjs.evtsExt__ObjectPickingTools__PickFirstAction.GDobjectObjects1= [];


gdjs.evtsExt__ObjectPickingTools__PickFirstAction.userFunc0xa87e48 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const lists = eventsFunctionContext.getObjectsLists("object").items;

for (const listName in lists) {
    const list = lists[listName];
    // TODO The 1st object in the list won't necessarily be the oldest one.
    // For instance, a collision condition that uses a spatial structure may change the order.
    if (list.length > 1) {
        list.length = 1;
    }
}

};
gdjs.evtsExt__ObjectPickingTools__PickFirstAction.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectPickingTools__PickFirstAction.userFunc0xa87e48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectPickingTools__PickFirstAction.func = function(runtimeScene, object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectPickingTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectPickingTools"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectPickingTools__PickFirstAction.GDobjectObjects1.length = 0;

gdjs.evtsExt__ObjectPickingTools__PickFirstAction.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectPickingTools__PickFirstAction.GDobjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ObjectPickingTools__PickFirstAction.registeredGdjsCallbacks = [];