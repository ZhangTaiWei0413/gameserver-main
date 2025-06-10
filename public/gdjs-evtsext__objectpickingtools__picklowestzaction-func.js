
if (typeof gdjs.evtsExt__ObjectPickingTools__PickLowestZAction !== "undefined") {
  gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectPickingTools__PickLowestZAction = {};
gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.GDObjectObjects1= [];


gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.userFunc0xa6ec90 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Create an empty array to hold the objects with the lowest value
let lowestValueObjects = [];

// Initialize the lowest value to a very small number
let lowestValue = Infinity;

// Get all instances of "object"
const lists = eventsFunctionContext.getObjectsLists("Object").items;

// Loop through each object to find the lowest value
for (const listName in lists) {
    for (const object of lists[listName]) {
        // Get the value of the variable
        const value = object.getZOrder();
        // Compare and update the lowest value
        if (value < lowestValue) {
            lowestValue = value;
            lowestValueObjects = [object]; // Reset the list to contain only this new lowest value object
        } else if (value === lowestValue) {
            lowestValueObjects.push(object); // If the value is equal to the current lowest, add it to the list
        }
    }
    // Remove all picked instances
    lists[listName].length = 0;
}

// Pick all object instances with the lowest value
if (lowestValueObjects.length !== 0) {
    for (const object of lowestValueObjects) {
        lists[object.getName()].push(object);
    }
}
};
gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.userFunc0xa6ec90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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

gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ObjectPickingTools__PickLowestZAction.registeredGdjsCallbacks = [];