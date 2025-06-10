
if (typeof gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition !== "undefined") {
  gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition = {};
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects1= [];
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects2= [];


gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.userFunc0xa86130 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Create an empty array to hold the objects with the lowest variable value
let lowestValueObjects = [];

// Initialize the lowest value to a very small number
let lowestValue = Infinity;

// Get all instances of "object"
const lists = eventsFunctionContext.getObjectsLists("Object").items;

// Store the variable name
const objectVariableName = eventsFunctionContext.getArgument("ObjectVariableName");

// Loop through each object to find the lowest value
for (const listName in lists) {
    for (const object of lists[listName]) {
        // Get the value of the variable
        const value = object.getVariables().get(objectVariableName).getAsNumber();
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
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.userFunc0xa86130(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.func = function(runtimeScene, Object, ObjectVariableName, parentEventsFunctionContext) {
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
if (argName === "ObjectVariableName") return ObjectVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueCondition.registeredGdjsCallbacks = [];