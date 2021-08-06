module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "046f6c64f8dedefa7ed5";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "server";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: client, , default */
/***/ (function(module) {

module.exports = JSON.parse("{\"client\":{\"js\":\"http://localhost:3001/static/js/bundle.js\"},\"\":{\"json\":\"http://localhost:3001/../chunks.json\",\"svg\":[\"http://localhost:3001/static/media/RedHatDisplay-Black.37206018.svg\",\"http://localhost:3001/static/media/RedHatDisplay-Bold.28496e14.svg\",\"http://localhost:3001/static/media/RedHatDisplay-Medium.c79d46e1.svg\",\"http://localhost:3001/static/media/RedHatDisplay-Regular.c86dab8c.svg\",\"http://localhost:3001/static/media/arrow-dashed.cda44ac1.svg\",\"http://localhost:3001/static/media/arrow-down.a0740279.svg\",\"http://localhost:3001/static/media/arrow-left.52d35d1b.svg\",\"http://localhost:3001/static/media/arrow-right.14fbef02.svg\",\"http://localhost:3001/static/media/chevron.4ad6b094.svg\",\"http://localhost:3001/static/media/clip-icon.501efe20.svg\",\"http://localhost:3001/static/media/close.7c52e54e.svg\",\"http://localhost:3001/static/media/facebook-icon.b32d4d4a.svg\",\"http://localhost:3001/static/media/hamburger.b7aa773c.svg\",\"http://localhost:3001/static/media/linkedin-icon.47b8a789.svg\",\"http://localhost:3001/static/media/logo.5a533772.svg\",\"http://localhost:3001/static/media/main-bg.2fec8690.svg\",\"http://localhost:3001/static/media/main-logo.fa7fdc16.svg\",\"http://localhost:3001/static/media/project-logo-0.41c41051.svg\",\"http://localhost:3001/static/media/project-logo-1.ff867e0d.svg\",\"http://localhost:3001/static/media/reasons-icon-0.a63a399d.svg\",\"http://localhost:3001/static/media/reasons-icon-1.c440c98a.svg\",\"http://localhost:3001/static/media/reasons-icon-2.adbba14e.svg\",\"http://localhost:3001/static/media/reasons-icon-3.446ba0f1.svg\",\"http://localhost:3001/static/media/reasons-icon-4.81ff985c.svg\",\"http://localhost:3001/static/media/slick.f97e3bbf.svg\",\"http://localhost:3001/static/media/solutions-icon-0.d6dd6b7b.svg\",\"http://localhost:3001/static/media/solutions-icon-1.7e348574.svg\",\"http://localhost:3001/static/media/solutions-icon-2.7827ef56.svg\",\"http://localhost:3001/static/media/tech-icon-0.eede30b3.svg\",\"http://localhost:3001/static/media/tech-icon-1.91907308.svg\",\"http://localhost:3001/static/media/tech-icon-2.b8fb40de.svg\",\"http://localhost:3001/static/media/tga-icon.8f64fde2.svg\",\"http://localhost:3001/static/media/vision-icon-0.e683eb43.svg\",\"http://localhost:3001/static/media/vision-icon-1.ae4b6b0c.svg\",\"http://localhost:3001/static/media/vision-icon-2.f4718c8f.svg\",\"http://localhost:3001/static/media/vision-icon-3.d4f606f0.svg\"],\"woff\":[\"http://localhost:3001/static/media/RedHatDisplay-Black.5a52ba2d.woff\",\"http://localhost:3001/static/media/RedHatDisplay-Bold.9af0bdf7.woff\",\"http://localhost:3001/static/media/RedHatDisplay-Medium.24793000.woff\",\"http://localhost:3001/static/media/RedHatDisplay-Regular.9f0f4da0.woff\",\"http://localhost:3001/static/media/slick.b7c9e1e4.woff\"],\"woff2\":[\"http://localhost:3001/static/media/RedHatDisplay-Black.861c69e3.woff2\",\"http://localhost:3001/static/media/RedHatDisplay-Bold.ab488a13.woff2\",\"http://localhost:3001/static/media/RedHatDisplay-Medium.0c822563.woff2\",\"http://localhost:3001/static/media/RedHatDisplay-Regular.ae38d88e.woff2\"],\"eot\":[\"http://localhost:3001/static/media/RedHatDisplay-Black.8849d4e7.eot\",\"http://localhost:3001/static/media/RedHatDisplay-Bold.44663778.eot\",\"http://localhost:3001/static/media/RedHatDisplay-Medium.0a46c6b8.eot\",\"http://localhost:3001/static/media/RedHatDisplay-Regular.3e0d38d6.eot\",\"http://localhost:3001/static/media/slick.ced611da.eot\"],\"ttf\":[\"http://localhost:3001/static/media/RedHatDisplay-Black.c709f5f6.ttf\",\"http://localhost:3001/static/media/RedHatDisplay-Bold.63efe6be.ttf\",\"http://localhost:3001/static/media/RedHatDisplay-Medium.9a963441.ttf\",\"http://localhost:3001/static/media/RedHatDisplay-Regular.2d15672f.ttf\",\"http://localhost:3001/static/media/slick.d41f55a7.ttf\"],\"png\":[\"http://localhost:3001/static/media/logo-icon-2.64edfda7.png\",\"http://localhost:3001/static/media/logo-icon-3.62e3c43b.png\",\"http://localhost:3001/static/media/project-img-0.ab020ced.png\",\"http://localhost:3001/static/media/project-img-1.c338c972.png\"]}}");

/***/ }),

/***/ "./node_modules/razzle-dev-utils/prettyNodeErrors.js":
/*!***********************************************************!*\
  !*** ./node_modules/razzle-dev-utils/prettyNodeErrors.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");
const {
  getTopFrame,
  getStackTraceLines,
  separateMessageFromStack,
} = __webpack_require__(/*! jest-message-util */ "jest-message-util");
const { codeFrameColumns } = __webpack_require__(/*! @babel/code-frame */ "@babel/code-frame");

function pretty(error) {
  const { message, stack } = error;
  const lines = getStackTraceLines(stack);
  const topFrame = getTopFrame(lines);
  const fallback = `${message}${stack}`;

  if (!topFrame) {
    return fallback;
  }

  const { file, line } = topFrame;
  try {
    const result = codeFrameColumns(
      fs.readFileSync(file, 'utf8'),
      { start: { line } },
      { highlightCode: true }
    );
    return `\n${message}\n\n${result}\n${stack}\n`;
  } catch (error) {
    return fallback;
  }
}

function usePrettyErrors(transform) {
  const { prepareStackTrace } = Error;

  Error.prepareStackTrace = (error, trace) => {
    const prepared = prepareStackTrace
      ? separateMessageFromStack(prepareStackTrace(error, trace))
      : error;
    const transformed = transform ? transform(prepared) : prepared;
    return pretty(transformed);
  };
}

// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
const stackTransform = ({ stack = '', ...rest }) => ({
  stack: stack.replace('/build/webpack:', ''),
  ...rest,
});

usePrettyErrors(stackTransform);


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};

module.exports.formatError = function(err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?300 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?300"))

/***/ }),

/***/ "./src/actions/about.js":
/*!******************************!*\
  !*** ./src/actions/about.js ***!
  \******************************/
/*! exports provided: getAboutInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAboutInfo", function() { return getAboutInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getAboutInfo = function getAboutInfo() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ABOUT_INFO"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/tga/getAboutInfo');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_ABOUT_INFO"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_ABOUT_INFO"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/client.js":
/*!*******************************!*\
  !*** ./src/actions/client.js ***!
  \*******************************/
/*! exports provided: getClientAll, getClientList, getClientMains, getClientProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientAll", function() { return getClientAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientList", function() { return getClientList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientMains", function() { return getClientMains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientProject", function() { return getClientProject; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getClientAll = function getClientAll() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLIENT_ALL"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/client/getAll');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_CLIENT_ALL"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_CLIENT_ALL"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getClientList = function getClientList() {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var _yield$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLIENT_LIST"]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/client/getList');

            case 4:
              _yield$get2 = _context2.sent;
              data = _yield$get2.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_CLIENT_LIST"],
                data: data
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_CLIENT_LIST"],
                error: _context2.t0
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getClientMains = function getClientMains() {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var _yield$get3, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLIENT_MAINS"]
              });
              _context3.prev = 1;
              _context3.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/client/getMains');

            case 4:
              _yield$get3 = _context3.sent;
              data = _yield$get3.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_CLIENT_MAINS"],
                data: data
              });
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_CLIENT_MAINS"],
                error: _context3.t0
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getClientProject = function getClientProject(projectId) {
  return /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var _yield$get4, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLIENT_PROJECT"]
              });
              _context4.prev = 1;
              _context4.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])("/client/get_".concat(projectId));

            case 4:
              _yield$get4 = _context4.sent;
              data = _yield$get4.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_CLIENT_PROJECT"],
                data: data
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_CLIENT_PROJECT"],
                error: _context4.t0
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/domain.js":
/*!*******************************!*\
  !*** ./src/actions/domain.js ***!
  \*******************************/
/*! exports provided: getDomainList, getDomainAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomainList", function() { return getDomainList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomainAll", function() { return getDomainAll; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getDomainList = function getDomainList() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_DOMAIN_LIST"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/domain/getList');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_DOMAIN_LIST"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_DOMAIN_LIST"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getDomainAll = function getDomainAll() {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var _yield$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_DOMAIN_ALL"]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/domain/getAll');

            case 4:
              _yield$get2 = _context2.sent;
              data = _yield$get2.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_DOMAIN_ALL"],
                data: data
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_DOMAIN_ALL"],
                error: _context2.t0
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/home.js":
/*!*****************************!*\
  !*** ./src/actions/home.js ***!
  \*****************************/
/*! exports provided: getHomeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeInfo", function() { return getHomeInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getHomeInfo = function getHomeInfo() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_HOME_INFO"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/tga/getHomeInfo');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_HOME_INFO"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_HOME_INFO"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/join.js":
/*!*****************************!*\
  !*** ./src/actions/join.js ***!
  \*****************************/
/*! exports provided: getJoinInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinInfo", function() { return getJoinInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getJoinInfo = function getJoinInfo() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_JOIN_INFO"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/tga/getJoinInfo');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_JOIN_INFO"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_JOIN_INFO"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/project.js":
/*!********************************!*\
  !*** ./src/actions/project.js ***!
  \********************************/
/*! exports provided: getProjectAll, getProjectMember, getProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectAll", function() { return getProjectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectMember", function() { return getProjectMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getProjectAll = function getProjectAll() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PROJECT_ALL"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/project/getAll');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_PROJECT_ALL"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_PROJECT_ALL"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getProjectMember = function getProjectMember(memberId) {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var _yield$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PROJECT_MEMBER"]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])("/project/getProjectsOf_".concat(memberId));

            case 4:
              _yield$get2 = _context2.sent;
              data = _yield$get2.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_PROJECT_MEMBER"],
                data: data
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_PROJECT_MEMBER"],
                error: _context2.t0
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getProject = function getProject(projectId) {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var _yield$get3, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PROJECT"]
              });
              _context3.prev = 1;
              _context3.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])("project/get_".concat(projectId));

            case 4:
              _yield$get3 = _context3.sent;
              data = _yield$get3.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_PROJECT"],
                data: data
              });
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_PROJECT"],
                error: _context3.t0
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/team.js":
/*!*****************************!*\
  !*** ./src/actions/team.js ***!
  \*****************************/
/*! exports provided: getTeamList, getTeamAll, getTeamMember, getTeamCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamList", function() { return getTeamList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamAll", function() { return getTeamAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamMember", function() { return getTeamMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamCount", function() { return getTeamCount; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getTeamList = function getTeamList() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_LIST"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/team/getList');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_LIST"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_LIST"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getTeamAll = function getTeamAll() {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var _yield$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_ALL"]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/team/getAll');

            case 4:
              _yield$get2 = _context2.sent;
              data = _yield$get2.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_ALL"],
                data: data
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_ALL"],
                error: _context2.t0
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getTeamMember = function getTeamMember(memberId) {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var _yield$get3, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_MEMBER"]
              });
              _context3.prev = 1;
              _context3.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])("/team/member_".concat(memberId));

            case 4:
              _yield$get3 = _context3.sent;
              data = _yield$get3.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_MEMBER"],
                data: data
              });
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_MEMBER"],
                error: _context3.t0
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getTeamCount = function getTeamCount() {
  return /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var _yield$get4, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_COUNT"]
              });
              _context4.prev = 1;
              _context4.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('team/count');

            case 4:
              _yield$get4 = _context4.sent;
              data = _yield$get4.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_COUNT"],
                data: data
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_COUNT"],
                error: _context4.t0
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/actions/tech.js":
/*!*****************************!*\
  !*** ./src/actions/tech.js ***!
  \*****************************/
/*! exports provided: getTechList, getTechMains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTechList", function() { return getTechList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTechMains", function() { return getTechMains; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getTechList = function getTechList() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TECH_LIST"]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/technology/getList');

            case 4:
              _yield$get = _context.sent;
              data = _yield$get.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TECH_LIST"],
                data: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TECH_LIST"],
                error: _context.t0
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getTechMains = function getTechMains() {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var _yield$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TECH_MAINS"]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/technology/getMains');

            case 4:
              _yield$get2 = _context2.sent;
              data = _yield$get2.data;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TECH_MAINS"],
                data: data
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TECH_MAINS"],
                error: _context2.t0
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: baseURL, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var baseURL = 'https://tga-server.herokuapp.com';
var tgaAPI = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: baseURL
});
function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", tgaAPI.get(url));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/header */ "./src/components/header/index.js");
/* harmony import */ var components_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/content */ "./src/components/content/index.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/footer */ "./src/components/footer/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_jss_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/jss/theme */ "./src/config/jss/theme.js");
/* harmony import */ var hooks_use_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/use-layout */ "./src/hooks/use-layout.js");
/* harmony import */ var hooks_ScrollToTop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hooks/ScrollToTop */ "./src/hooks/ScrollToTop.js");
/* harmony import */ var pages_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pages/error */ "./src/pages/error/index.js");
/* harmony import */ var components_helmet_wrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/helmet-wrap */ "./src/components/helmet-wrap/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages */ "./src/pages/index.js");
/* harmony import */ var actions_project__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! actions/project */ "./src/actions/project.js");
/* harmony import */ var _config_jss_use_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./config/jss/use-styles */ "./src/config/jss/use-styles.js");
/* harmony import */ var assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/fonts/font-face.css */ "./src/assets/fonts/font-face.css");
/* harmony import */ var assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_17__);


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function App(_ref) {
  var showLayout = _ref.showLayout;
  var classNames = Object(_config_jss_use_styles__WEBPACK_IMPORTED_MODULE_16__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var fetchProjectstInfo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return dispatch(Object(actions_project__WEBPACK_IMPORTED_MODULE_15__["getProjectAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchProjectstInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classNames.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_helmet_wrap__WEBPACK_IMPORTED_MODULE_12__["HelmetWrap"], {
    title: "TGA website",
    description: "TGA website description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(hooks_ScrollToTop__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["home"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["about"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["project"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["team"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["crewman"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_14__["join"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    component: pages_error__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }))), showLayout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var showLayout = Object(hooks_use_layout__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var theme = _objectSpread({}, _config_jss_theme__WEBPACK_IMPORTED_MODULE_8__["default"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, {
    showLayout: showLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }));
});

/***/ }),

/***/ "./src/assets/fonts/font-face.css":
/*!****************************************!*\
  !*** ./src/assets/fonts/font-face.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$":
/*!***************************************************!*\
  !*** ./src/assets/icons sync ^\.\/.*\-icon\.svg$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clip-icon.svg": "./src/assets/icons/clip-icon.svg",
	"./facebook-icon.svg": "./src/assets/icons/facebook-icon.svg",
	"./linkedin-icon.svg": "./src/assets/icons/linkedin-icon.svg",
	"./tga-icon.svg": "./src/assets/icons/tga-icon.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$";

/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/.*\\.svg$":
/*!*********************************************!*\
  !*** ./src/assets/icons sync ^\.\/.*\.svg$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow-dashed.svg": "./src/assets/icons/arrow-dashed.svg",
	"./arrow-down.svg": "./src/assets/icons/arrow-down.svg",
	"./arrow-left.svg": "./src/assets/icons/arrow-left.svg",
	"./arrow-right.svg": "./src/assets/icons/arrow-right.svg",
	"./chevron.svg": "./src/assets/icons/chevron.svg",
	"./clip-icon.svg": "./src/assets/icons/clip-icon.svg",
	"./facebook-icon.svg": "./src/assets/icons/facebook-icon.svg",
	"./linkedin-icon.svg": "./src/assets/icons/linkedin-icon.svg",
	"./main-logo.svg": "./src/assets/icons/main-logo.svg",
	"./project-logo-0.svg": "./src/assets/icons/project-logo-0.svg",
	"./project-logo-1.svg": "./src/assets/icons/project-logo-1.svg",
	"./reasons-icon-0.svg": "./src/assets/icons/reasons-icon-0.svg",
	"./reasons-icon-1.svg": "./src/assets/icons/reasons-icon-1.svg",
	"./reasons-icon-2.svg": "./src/assets/icons/reasons-icon-2.svg",
	"./reasons-icon-3.svg": "./src/assets/icons/reasons-icon-3.svg",
	"./reasons-icon-4.svg": "./src/assets/icons/reasons-icon-4.svg",
	"./solutions-icon-0.svg": "./src/assets/icons/solutions-icon-0.svg",
	"./solutions-icon-1.svg": "./src/assets/icons/solutions-icon-1.svg",
	"./solutions-icon-2.svg": "./src/assets/icons/solutions-icon-2.svg",
	"./tech-icon-0.svg": "./src/assets/icons/tech-icon-0.svg",
	"./tech-icon-1.svg": "./src/assets/icons/tech-icon-1.svg",
	"./tech-icon-2.svg": "./src/assets/icons/tech-icon-2.svg",
	"./tga-icon.svg": "./src/assets/icons/tga-icon.svg",
	"./vision-icon-0.svg": "./src/assets/icons/vision-icon-0.svg",
	"./vision-icon-1.svg": "./src/assets/icons/vision-icon-1.svg",
	"./vision-icon-2.svg": "./src/assets/icons/vision-icon-2.svg",
	"./vision-icon-3.svg": "./src/assets/icons/vision-icon-3.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$":
/*!*********************************************************!*\
  !*** ./src/assets/icons sync ^\.\/logo\-icon\-.*\.png$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo-icon-0.png": "./src/assets/icons/logo-icon-0.png",
	"./logo-icon-1.png": "./src/assets/icons/logo-icon-1.png",
	"./logo-icon-2.png": "./src/assets/icons/logo-icon-2.png",
	"./logo-icon-3.png": "./src/assets/icons/logo-icon-3.png",
	"./logo-icon-4.png": "./src/assets/icons/logo-icon-4.png",
	"./logo-icon-5.png": "./src/assets/icons/logo-icon-5.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$";

/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$":
/*!************************************************************!*\
  !*** ./src/assets/icons sync ^\.\/reasons\-icon\-.*\.svg$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reasons-icon-0.svg": "./src/assets/icons/reasons-icon-0.svg",
	"./reasons-icon-1.svg": "./src/assets/icons/reasons-icon-1.svg",
	"./reasons-icon-2.svg": "./src/assets/icons/reasons-icon-2.svg",
	"./reasons-icon-3.svg": "./src/assets/icons/reasons-icon-3.svg",
	"./reasons-icon-4.svg": "./src/assets/icons/reasons-icon-4.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$";

/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/vision\\-icon\\-.*\\.svg$":
/*!***********************************************************!*\
  !*** ./src/assets/icons sync ^\.\/vision\-icon\-.*\.svg$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vision-icon-0.svg": "./src/assets/icons/vision-icon-0.svg",
	"./vision-icon-1.svg": "./src/assets/icons/vision-icon-1.svg",
	"./vision-icon-2.svg": "./src/assets/icons/vision-icon-2.svg",
	"./vision-icon-3.svg": "./src/assets/icons/vision-icon-3.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/vision\\-icon\\-.*\\.svg$";

/***/ }),

/***/ "./src/assets/icons/arrow-dashed.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/arrow-dashed.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow-dashed.cda44ac1.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-down.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-down.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow-down.a0740279.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-left.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-left.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow-left.52d35d1b.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-right.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/arrow-right.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow-right.14fbef02.svg";

/***/ }),

/***/ "./src/assets/icons/chevron.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/chevron.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chevron.4ad6b094.svg";

/***/ }),

/***/ "./src/assets/icons/clip-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/clip-icon.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/clip-icon.501efe20.svg";

/***/ }),

/***/ "./src/assets/icons/facebook-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/facebook-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/facebook-icon.b32d4d4a.svg";

/***/ }),

/***/ "./src/assets/icons/linkedin-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/linkedin-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linkedin-icon.47b8a789.svg";

/***/ }),

/***/ "./src/assets/icons/logo-icon-0.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-0.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAoCAMAAAArH/PVAAACvlBMVEUAAAAAAACAgIBVVVVAQIAzZmZVVYBJSW1AYGBVVXFNTWZGXXRAVWpOYmJJW21EVWZQYHBLWmlHVXFDXmtNWWZJVW1GXWhOWW9KVWpHXGZFWGxMVWhJW21GWGpNVW9KWmtIWGhGXWxLWmlJV21MWm5KV2tIXGlGWWxLV2pJW21LV2hKW2xIWWlHV21KWmpJWG1HV2tLWmlKWGxHWm1KWGtJW2lIWWtLWGpJW2xIWWpHWG1KWmtJWWlIWGxJWWxIWGtHWm1KWWtJV2pIWmxKWWpJV2xIWmtHWGlJWWpIWGxKWmtJWWxIWGtIWmpKWWxJWGpIWmxKWWtJWGxIWmtIWWpKWGxJWmpIWWxKWGtJWmpIWmpKWWxJWGtIWmxKWWtJWGpKWGxIWWpKWGtJWmpJWWxIWGtKWmxJWWtIWGpKWWtJWGxIWWtJWmtIWWpKWWtJWWxIWGtJWWtIWGpKWmxJWWtJWGxJWWpJWGtIWWtKWWxJWGtJWWpKWWtJWWtIWWtKWmxJWWtJWWpKWmtJWWtIWmtKWWxJWGtJWmpKWWtJWGtJWWxKWGpJWWtJWWtKWGtJWWtJWWxIWmtKWWpJWWtJWmtKWWxJWWtJWmpKWWtJWWtJWWtKWGxJWWpIWGtJWWtJWWtKWWxJWmpIWWtJWWtJWmxJWWtKWWpJWmtJWWtIWWtJWWtJWWxJWWtKWWpJWWtJWGtIWWtJWWtJWWtKWWtJWGtJWWtJWWxJWmtJWWpJWWtKWWtJWWtJWWtJWWxJWWtJWWtJWWtKWWtJWWtJWWtJWWpJWGtJWWtJWWtKWGtJWWtJWWtJWmtJWWtJWWtJWWtJWWxJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWmtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWtJWWv///+/+ho3AAAA6HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMlJicoKSosLS4vMDEyMzQ2Nzg5Ojs8PT4/QEJDREVGR0hJSktNTk9QUVJTVFVWV1hZWltcXV5gYWJjZGVoamtsbW5vcHFydHV3eHl7fH5/gIGChIWGh4iJioyNjo+QkZKUlZaXmJmanJ2en6Ch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"

/***/ }),

/***/ "./src/assets/icons/logo-icon-1.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAYAAABdNX5YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNzNFQzlBNTlGNDExRTQ5NDdCODQzRTYxMUI5N0IyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyOEI5MEM0NTlGNDExRTQ5NDdCODQzRTYxMUI5N0IyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA3M0VDOTg1OUY0MTFFNDk0N0I4NDNFNjExQjk3QjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA3M0VDOTk1OUY0MTFFNDk0N0I4NDNFNjExQjk3QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xL7vfAAAd00lEQVR42uxdB3hU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"

/***/ }),

/***/ "./src/assets/icons/logo-icon-2.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-icon-2.64edfda7.png";

/***/ }),

/***/ "./src/assets/icons/logo-icon-3.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-icon-3.62e3c43b.png";

/***/ }),

/***/ "./src/assets/icons/logo-icon-4.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/logo-icon-5.png":
/*!******************************************!*\
  !*** ./src/assets/icons/logo-icon-5.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/main-logo.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/main-logo.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/main-logo.fa7fdc16.svg";

/***/ }),

/***/ "./src/assets/icons/project-logo-0.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/project-logo-0.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-logo-0.41c41051.svg";

/***/ }),

/***/ "./src/assets/icons/project-logo-1.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/project-logo-1.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-logo-1.ff867e0d.svg";

/***/ }),

/***/ "./src/assets/icons/reasons-icon-0.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/reasons-icon-0.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/reasons-icon-0.a63a399d.svg";

/***/ }),

/***/ "./src/assets/icons/reasons-icon-1.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/reasons-icon-1.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/reasons-icon-1.c440c98a.svg";

/***/ }),

/***/ "./src/assets/icons/reasons-icon-2.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/reasons-icon-2.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/reasons-icon-2.adbba14e.svg";

/***/ }),

/***/ "./src/assets/icons/reasons-icon-3.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/reasons-icon-3.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/reasons-icon-3.446ba0f1.svg";

/***/ }),

/***/ "./src/assets/icons/reasons-icon-4.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/reasons-icon-4.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/reasons-icon-4.81ff985c.svg";

/***/ }),

/***/ "./src/assets/icons/solutions-icon-0.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/solutions-icon-0.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/solutions-icon-0.d6dd6b7b.svg";

/***/ }),

/***/ "./src/assets/icons/solutions-icon-1.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/solutions-icon-1.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/solutions-icon-1.7e348574.svg";

/***/ }),

/***/ "./src/assets/icons/solutions-icon-2.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/solutions-icon-2.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/solutions-icon-2.7827ef56.svg";

/***/ }),

/***/ "./src/assets/icons/tech-icon-0.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/tech-icon-0.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tech-icon-0.eede30b3.svg";

/***/ }),

/***/ "./src/assets/icons/tech-icon-1.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/tech-icon-1.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tech-icon-1.91907308.svg";

/***/ }),

/***/ "./src/assets/icons/tech-icon-2.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/tech-icon-2.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tech-icon-2.b8fb40de.svg";

/***/ }),

/***/ "./src/assets/icons/tga-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/tga-icon.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tga-icon.8f64fde2.svg";

/***/ }),

/***/ "./src/assets/icons/vision-icon-0.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/vision-icon-0.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vision-icon-0.e683eb43.svg";

/***/ }),

/***/ "./src/assets/icons/vision-icon-1.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/vision-icon-1.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vision-icon-1.ae4b6b0c.svg";

/***/ }),

/***/ "./src/assets/icons/vision-icon-2.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/vision-icon-2.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vision-icon-2.f4718c8f.svg";

/***/ }),

/***/ "./src/assets/icons/vision-icon-3.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/vision-icon-3.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vision-icon-3.d4f606f0.svg";

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$":
/*!************************************************************!*\
  !*** ./src/assets/images sync ^\.\/project\-img\-.*\.png$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./project-img-0.png": "./src/assets/images/project-img-0.png",
	"./project-img-1.png": "./src/assets/images/project-img-1.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$";

/***/ }),

/***/ "./src/assets/images/project-img-0.png":
/*!*********************************************!*\
  !*** ./src/assets/images/project-img-0.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-img-0.ab020ced.png";

/***/ }),

/***/ "./src/assets/images/project-img-1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/project-img-1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-img-1.c338c972.png";

/***/ }),

/***/ "./src/components/advantage/index.js":
/*!*******************************************!*\
  !*** ./src/components/advantage/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/advantage/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/advantage/index.js";




function Advantage(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.advantage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: styles.icon,
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Header3"], {
    className: styles.header,
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Description3"], {
    className: styles.description,
    title: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Advantage);

/***/ }),

/***/ "./src/components/advantage/use-styles.js":
/*!************************************************!*\
  !*** ./src/components/advantage/use-styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _advantage;

  return {
    advantage: (_advantage = {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(44)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_advantage, theme.media.sm_, {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(240),
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_advantage, theme.media.md_, {
      '&:last-child': {
        marginRight: 0
      }
    }), _advantage),
    icon: {
      margin: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48)
    },
    header: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    }),
    description: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(13)
    })
  };
}));

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/button/use-styles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/button/index.js";



function Button(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.button, props.dark && styles.darkButton, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, props.title);
}

/***/ }),

/***/ "./src/components/button/use-styles.js":
/*!*********************************************!*\
  !*** ./src/components/button/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    button: {
      border: "1px solid ".concat(theme.colors.black.string()),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(14), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32)],
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
      fontFamily: 'RedHatFontBold',
      transition: '.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.black.string(),
        color: theme.colors.white.string()
      }
    },
    darkButton: {
      backgroundColor: theme.colors.black.string(),
      color: theme.colors.white.string(),
      transition: '.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.primary.string(),
        border: "1px solid ".concat(theme.colors.primary.string())
      }
    }
  };
}));

/***/ }),

/***/ "./src/components/cards/index.js":
/*!***************************************!*\
  !*** ./src/components/cards/index.js ***!
  \***************************************/
/*! exports provided: CrewCard, ProjectCard, InfoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewCard", function() { return CrewCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCard", function() { return ProjectCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCard", function() { return InfoCard; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/cards/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api */ "./src/api/index.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/cards/index.js";






function CrewCard(_ref) {
  var name = _ref.name,
      bio = _ref.bio,
      photos = _ref.photos,
      url = _ref.url;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isHover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      activeCard = _useState4[0],
      setActiveCard = _useState4[1];

  var cardToggle = function cardToggle() {
    setActiveCard(!activeCard);
  };

  var firstPhoto = "".concat(api__WEBPACK_IMPORTED_MODULE_6__["baseURL"], "/image/").concat(photos && photos[0]);
  var secondPhoto = "".concat(api__WEBPACK_IMPORTED_MODULE_6__["baseURL"], "/image/").concat(photos && photos[1]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.crewCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardPhoto, activeCard && styles.cardActive),
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: {
      backgroundImage: "url(".concat(firstPhoto, ")")
    },
    onClick: cardToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(secondPhoto, ")")
    },
    className: styles.hoverPhoto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.hoverDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, "QA engineer and project lead with more than 6 years of experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Manager:\xA0"), "World athletics projects, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "Lucky Voice"), ",", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Sixley")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "QA:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Netcel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["CustomLink"], {
    title: 'Explore more',
    url: "team/".concat(url),
    white: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["CustomLink"], {
    title: name,
    url: "team/".concat(url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Description3"], {
    title: bio,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }));
}
function ProjectCard(_ref2) {
  var image = _ref2.image,
      icon = _ref2.icon,
      description = _ref2.description;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var imgPath = "".concat(api__WEBPACK_IMPORTED_MODULE_6__["baseURL"], "/image/").concat(image);
  var iconPath = "".concat(api__WEBPACK_IMPORTED_MODULE_6__["baseURL"], "/image/").concat(icon);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.projectCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardPhoto, styles.projectPhoto),
    style: {
      backgroundImage: "url(".concat(imgPath, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header4"], {
    title: description,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardLogo,
    style: {
      backgroundImage: "url(".concat(iconPath, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }));
}
function InfoCard(_ref3) {
  var title = _ref3.title,
      requirements = _ref3.requirements,
      link = _ref3.link;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.infoCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header4"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styles.requirements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }
  }, requirements.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "info-card-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 8
      }
    }, item));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: link,
    className: styles.externalLink,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }, "Learn more"));
}

/***/ }),

/***/ "./src/components/cards/use-styles.js":
/*!********************************************!*\
  !*** ./src/components/cards/use-styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    crewCard: {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(270),
      '&:hover': {
        '& cardHover': {
          display: 'flex'
        }
      }
    },
    cardName: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      fontFamily: 'RedHatFontBold',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      '& a': {
        textDecoration: 'none',
        '&:after': {
          content: 'unset'
        }
      }
    },
    hoverPhoto: {
      opacity: 0,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundSize: 'cover'
    },
    cardPhoto: {
      backgroundSize: 'cover',
      width: '100%',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(280),
      overflow: 'hidden',
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        transition: '.4s',
        opacity: 0,
        backgroundImage: theme.gradients.secondary,
        transform: 'translateY(100%)'
      },
      '&:hover': {
        '& $hoverPhoto': {
          opacity: 1
        }
      }
    },
    cardInfo: {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)],
      transform: 'translateY(100%)',
      transition: '.4s',
      position: 'relative',
      height: '100%',
      zIndex: 99,
      fontFamily: 'RedHatFont'
    },
    hoverDescription: {
      color: theme.colors.white.string(),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    },
    textRow: {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      '& a': {
        color: theme.colors.white.string(),
        textDecoration: 'underline'
      }
    },
    textRowHeader: {
      fontFamily: 'RedHatFontBold',
      letterSpacing: '0.5px'
    },
    cardActive: {
      '&:after': {
        opacity: 1,
        transform: 'translateY(0)'
      },
      '& $cardInfo': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.4s'
      }
    },
    customDescription: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    },
    bottom: {
      marginTop: 'auto'
    },
    cardLogo: {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(105),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
    },
    projectCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    projectPhoto: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    infoCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%',
      backgroundColor: theme.colors.white.string(),
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.05)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)],
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      '& a': {
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          content: '""',
          position: 'absolute',
          left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
          top: '-12px',
          width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
          backgroundSize: 'contain',
          marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }, theme.media.sm_, {
          content: 'none'
        })
      }
    }, theme.media.sm_, {
      width: 'calc(50% - 45px)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)],
      marginBottom: 0
    }),
    requirements: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      listStylePosition: 'inside',
      '& li': {
        fontFamily: 'RedHatFont',
        fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
        color: theme.colors.black.string(),
        position: 'relative',
        '& span': {
          display: 'block',
          paddingLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(14)
        },
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          position: 'absolute',
          content: '""',
          top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(11),
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '10px',
          backgroundColor: theme.colors.black.string()
        }, theme.media.sm_, {
          top: 'calc(50% - 3px)'
        })
      }
    },
    externalLink: {
      display: 'inline-block',
      position: 'relative',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      fontFamily: 'RedHatFontBold',
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.colors.primary.string(),
        transform: 'scaleX(0.5)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s'
      },
      '&:hover': {
        '&:after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
        '&:before': {
          animation: '1.2s fadeIn',
          animationFillMode: 'forwards'
        }
      }
    }
  };
}));

/***/ }),

/***/ "./src/components/carousel/index.js":
/*!******************************************!*\
  !*** ./src/components/carousel/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/components/carousel/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/carousel/index.js";







var NextArrow = function NextArrow(_ref) {
  var onClick = _ref.onClick;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(styles.slideArrow, styles.slideArrowNext),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11 0.980469L21.0195 11L11 21.0195L9.24219 19.2617L16.2148 12.2305H0.980469V9.76953H16.2148L9.24219 2.73828L11 0.980469Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  })));
};

var PrevArrow = function PrevArrow(_ref2) {
  var onClick = _ref2.onClick;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(styles.slideArrow, styles.slideArrowPrev),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11 0.980469L0.980469 11L11 21.0195L12.7578 19.2617L5.78516 12.2305H21.0195V9.76953H5.78516L12.7578 2.73828L11 0.980469Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  })));
};

var Carousel = function Carousel(_ref3) {
  var children = _ref3.children,
      slidesToShow = _ref3.slidesToShow,
      slidesToScroll = _ref3.slidesToScroll,
      variableWidth = _ref3.variableWidth,
      dots = _ref3.dots,
      autoPlay = _ref3.autoPlay,
      className = _ref3.className;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: autoPlay,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    variableWidth: variableWidth,
    dots: dots,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NextArrow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 14
      }
    }),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrevArrow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 14
      }
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(styles.slider, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/components/carousel/use-styles.js":
/*!***********************************************!*\
  !*** ./src/components/carousel/use-styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    slideArrow: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'absolute',
      top: 'calc(50% - 7px)',
      transform: 'translate(0, -50%)',
      backgroundColor: theme.gradients.gray,
      color: 'black',
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      opacity: 1,
      zIndex: 3,
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color .3s ease',
      '& svg path': {
        fill: 'currentcolor'
      },
      '&:hover': {
        backgroundColor: 'black',
        color: 'white'
      }
    }, theme.media.sm_, {
      display: 'flex'
    }),
    slideArrowPrev: {
      left: 0
    },
    slideArrowNext: {
      right: 0
    }
  };
}));

/***/ }),

/***/ "./src/components/content/index.js":
/*!*****************************************!*\
  !*** ./src/components/content/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/content/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/content/index.js";


function Content(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.children);
}

/***/ }),

/***/ "./src/components/content/use-styles.js":
/*!**********************************************!*\
  !*** ./src/components/content/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {};
}));

/***/ }),

/***/ "./src/components/error/index.js":
/*!***************************************!*\
  !*** ./src/components/error/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/error/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/error/index.js";



function Error() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.errorWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.errorHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.errorCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.errorSymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.errorLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.errorSymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header1"], {
    title: "Page not found",
    className: styles.errorDecription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/error/use-styles.js":
/*!********************************************!*\
  !*** ./src/components/error/use-styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    errorWrap: {
      display: 'flex',
      flexFlow: 'row wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    errorHeader: {
      fontFamily: 'RedHatFontBold',
      fontWeight: 700,
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(72),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(72),
      textTransform: 'uppercase'
    },
    errorCode: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(24),
      '& $errorSymbol:last-child': {
        position: 'relative',
        left: '-27px'
      }
    },
    errorSymbol: {
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(160),
      lineHeight: '100px'
    },
    errorLogo: {
      display: 'inline-block',
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(150),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(120),
      backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/main-logo.svg */ "./src/assets/icons/main-logo.svg"), ")"),
      backgroundRepeat: 'no-repeat',
      margin: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16)]
    },
    errorDecription: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30)
    }
  };
}));

/***/ }),

/***/ "./src/components/filters/index.js":
/*!*****************************************!*\
  !*** ./src/components/filters/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/filters/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var css_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-select */ "css-select");
/* harmony import */ var css_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(css_select__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/filters/index.js";






function Filters(_ref) {
  var title = _ref.title,
      data = _ref.data;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      showAll = _useState4[0],
      setShowAll = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      width = _useState6[0],
      setWidth = _useState6[1];

  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_5__["mobileSize"]);

  var setFilter = function setFilter(e) {
    var index = e.currentTarget.dataset.index;
    var clikedItem = Number(index);

    if (showAll) {
      setShowAll(false);
    }

    var filtersToggling = checked.includes(clikedItem) ? checked.filter(function (i) {
      return i != clikedItem;
    }) // remove item
    : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checked), [Number(index)]); // add item

    setChecked(filtersToggling);
  };

  var all = function all() {
    setChecked([]);
    setShowAll(!showAll);
  };

  var computedRowWidth = Boolean(Object.keys(data).length > 4);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var blockWidth = ref.current ? ref.current.offsetWidth : 0;
    var computed = blockWidth / 2 + 30;
    setWidth(computed);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_6__["Description1"], {
    className: styles.textBolder,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: styles.filtersList,
    style: isMobile ? {
      width: '100%'
    } : {
      width: computedRowWidth ? width : 'auto'
    },
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "all",
    className: styles.filterItem,
    type: "checkbox",
    checked: showAll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "all",
    onClick: all,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }, "All")), data.map(function (filter, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Filter, {
      key: filter,
      item: filter,
      all: showAll,
      index: index,
      status: checked.includes(index),
      onClick: setFilter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    });
  })));
}

function Filter(_ref2) {
  var index = _ref2.index,
      item = _ref2.item,
      status = _ref2.status,
      onClick = _ref2.onClick;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: "filter-".concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: index,
    className: styles.filterItem,
    type: "checkbox",
    checked: status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: index,
    onClick: onClick,
    "data-index": index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }
  }, item));
}

/***/ }),

/***/ "./src/components/filters/use-styles.js":
/*!**********************************************!*\
  !*** ./src/components/filters/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    filters: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      paddingBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      paddingBottom: 0
    }),
    filtersList: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(7),
      '& li': {
        padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), 0],
        margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(4), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(4), 0],
        '&:last-child': {
          marginRight: 0
        }
      }
    },
    filterItem: {
      display: 'none',
      '&~label': {
        border: "1px solid ".concat(theme.colors.black.string()),
        borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(50),
        fontFamily: 'RedHatFont',
        fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(14),
        fontWeight: 400,
        cursor: 'pointer',
        padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12)]
      },
      '&:checked~label': {
        borderColor: theme.colors.primary.string(),
        backgroundColor: "rgba(17, 138, 224, 0.12)",
        color: theme.colors.primary.string()
      }
    },
    textBolder: {
      fontFamily: 'RedHatFontBold'
    }
  };
}));

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/footer/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/footer/index.js";




function Footer(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: styles.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "TGA Digital LTD", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }
  }), "10671403")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "15 Pheasant Walk ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }), " Gerrards Cross, Bucks, SL9 0PW ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 63
    }
  }), ' ', "United Kingdom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "contact@tgadigital.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "VAT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "265263204")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footerSocials,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/TGADigitalIT",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/facebook-icon.svg */ "./src/assets/icons/facebook-icon.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/company/tga-digital-ltd/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/linkedin-icon.svg */ "./src/assets/icons/linkedin-icon.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }))))));
}

/***/ }),

/***/ "./src/components/footer/use-styles.js":
/*!*********************************************!*\
  !*** ./src/components/footer/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _footerInfo, _a, _footerSocials;

  return {
    footer: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      backgroundColor: theme.colors.black.string(),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28), 0],
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(135),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20), 0]
    }),
    footerContent: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexWrap: 'wrap',
      '& > div:nth-child(1n+2)': {
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
      }
    }, theme.media.sm_, {
      flexWrap: 'nowrap'
    }),
    footerInfo: (_footerInfo = {
      color: theme.colors.white.string(),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      flex: '0 1 50%'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_footerInfo, theme.media.sm_, {
      flex: 'unset',
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_footerInfo, theme.media.md_, {
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(96)
    }), _footerInfo),
    footerHead: {
      fontFamily: 'RedHatFontBold',
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(5)
    },
    footerText: {
      fontFamily: 'RedHatFont'
    },
    footerSocials: (_footerSocials = {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_footerSocials, theme.media.sm_, {
      marginLeft: 'auto',
      marginTop: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_footerSocials, '& a', (_a = {
      display: 'inline-block',
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      borderBottom: '4px solid transparent'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_a, theme.media.sm_, {
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_a, '&:hover', {
      borderBottom: "4px solid ".concat(theme.colors.primary.string())
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_a, '&:last-child', {
      margin: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_a, '& img', {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    }), _a)), _footerSocials)
  };
}));

/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/components/form/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/form/index.js";






function Form(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["mobileSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: styles.form,
    id: "contact",
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.inputWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: styles.input,
    type: "text",
    placeholder: "Name",
    name: "firstname",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.separator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.inputWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: styles.input,
    type: "email",
    name: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.separator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  })), !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: styles.buttonOffset,
    title: "Send message",
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.inputWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: styles.input,
    name: "message",
    placeholder: "Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.separator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.uploadFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    className: styles.uploadFileInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: styles.uploadFileField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "23",
    height: "12",
    viewBox: "0 0 23 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.2539 10H5.67393C3.58393 10 1.72393 8.47 1.52393 6.39C1.29393 4.01 3.16393 2 5.50393 2H17.8639C19.1739 2 20.3639 2.94 20.4939 4.24C20.6439 5.74 19.4739 7 18.0039 7H7.50393C6.95393 7 6.50393 6.55 6.50393 6C6.50393 5.45 6.95393 5 7.50393 5H16.2539C16.6639 5 17.0039 4.66 17.0039 4.25C17.0039 3.84 16.6639 3.5 16.2539 3.5H7.64393C6.33393 3.5 5.14393 4.44 5.01393 5.74C4.86393 7.24 6.03393 8.5 7.50393 8.5H17.8339C19.9239 8.5 21.7839 6.97 21.9839 4.89C22.2139 2.5 20.3439 0.5 18.0039 0.5H5.73393C2.86393 0.5 0.293929 2.6 0.0239288 5.46C-0.276071 8.75 2.28393 11.5 5.50393 11.5H16.2539C16.6639 11.5 17.0039 11.16 17.0039 10.75C17.0039 10.34 16.6639 10 16.2539 10Z",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), "Upload file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.excerpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "(File requirements: pdf, doc, docx, rtf, ppt, pptx)"))), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: styles.mobileButton,
    title: "Send message",
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  })));
}

/***/ }),

/***/ "./src/components/form/use-styles.js":
/*!*******************************************!*\
  !*** ./src/components/form/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _textarea, _inputWrap, _column, _uploadFileField;

  return {
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      '& input': {
        paddingBottom: '8px'
      },
      '& textarea': (_textarea = {
        resize: 'none',
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(133),
        minWidth: '100%',
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(50),
        verticalAlign: 'top'
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_textarea, theme.media.sm_, {
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(-17)
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_textarea, theme.media.md_, {
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(3)
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_textarea, theme.media.lg_, {
        minWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(490)
      }), _textarea)
    },
    row: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap'
    }, theme.media.sm_, {
      flexWrap: 'nowrap'
    }),
    separator: {
      height: '2px',
      position: 'absolute',
      bottom: 0,
      width: 0,
      backgroundColor: theme.colors.primary.string(),
      transition: '0.4s',
      left: 0,
      zIndex: 2
    },
    inputWrap: (_inputWrap = {
      position: 'relative',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(50)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_inputWrap, theme.media.lg_, {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(490)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_inputWrap, theme.media.md_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_inputWrap, '&:first-child', {
      marginTop: 0
    }), _inputWrap),
    input: {
      border: 0,
      borderBottom: "2px solid ".concat(theme.colors.black),
      outline: 'none',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      color: 'rgba(0, 0, 0, 0.54)',
      fontFamily: 'RedHatFont',
      '&:focus ~ $separator': {
        width: '100%',
        transition: '0.4s'
      }
    },
    column: (_column = {
      position: 'relative',
      width: '100%'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_column, theme.media.sm_, {
      width: '48%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_column, theme.media.lg_, {
      width: '50%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_column, '& input', {
      minWidth: '100%'
    }), _column),
    uploadFile: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.sm_, {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60)
    }),
    excerpt: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      color: theme.colors.black.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
      fontFamily: 'RedHatFont',
      marginLeft: 0,
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18)
    }, theme.media.sm_, {
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28),
      marginTop: 0
    }),
    buttonOffset: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48)
    },
    uploadFileField: (_uploadFileField = {
      marginBottom: 0,
      border: 'none',
      color: theme.colors.black.string(),
      backgroundColor: 'transparent',
      cursor: 'pointer',
      minWidth: 'auto',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'RedHatFont',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      padding: 0,
      zIndex: 0
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uploadFileField, "cursor", 'pointer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uploadFileField, '& svg', {
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(13)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uploadFileField, '&:hover', {
      color: theme.colors.primary.string(),
      '& svg': {
        '&	path': {
          fill: theme.colors.primary.string()
        }
      }
    }), _uploadFileField),
    uploadFileInput: {
      position: 'absolute',
      zIndex: 1,
      opacity: 0,
      cursor: 'pointer'
    },
    mobileButton: {
      display: 'block',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), 'auto', 0],
      width: 'calc(100% - 32px)'
    }
  };
}));

/***/ }),

/***/ "./src/components/header/drawer/close.svg":
/*!************************************************!*\
  !*** ./src/components/header/drawer/close.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/close.7c52e54e.svg";

/***/ }),

/***/ "./src/components/header/drawer/index.js":
/*!***********************************************!*\
  !*** ./src/components/header/drawer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/drawer/use-styles.js");


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/drawer/index.js";





function Drawer(_ref) {
  var menu = _ref.menu,
      isOpen = _ref.isOpen,
      onDrawerClose = _ref.onDrawerClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      active = _useState2[0],
      setACtive = _useState2[1];

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var contacts = [{
    label: 'Phone',
    text: '020 3633 4842',
    icon: 'facebook'
  }, {
    label: 'Email',
    text: 'contact@tgadigital.com',
    icon: 'linkedin'
  }];

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.drawerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: onDrawerClose,
    className: styles.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: __webpack_require__(/*! ./close.svg */ "./src/components/header/drawer/close.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.drawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: styles.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, menu.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: item.title,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(styles.menuItem, active === item && 'active'),
      onClick: onDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      className: styles.menuItemLink,
      onClick: onDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.socials,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, contacts.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialsRow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.phone,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$")("./".concat(item.icon, "-icon.svg")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 12
      }
    }))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Contact us",
    className: styles.contactButton,
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  })))));
}

function CustomLink(props) {
  if (props.route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      to: props.route.getPath(props.routeParams || {}),
      className: props.className,
      exact: props.hasOwnProperty('exact') ? props.exact : props.route.exact,
      onClick: props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 4
      }
    }, props.title);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: props.link,
      className: props.className,
      onClick: props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 4
      }
    }, props.title);
  }
}

/***/ }),

/***/ "./src/components/header/drawer/use-styles.js":
/*!****************************************************!*\
  !*** ./src/components/header/drawer/use-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    drawerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: theme.colors.white.string(),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23), 0],
      zIndex: 10,
      overflowY: 'scroll'
    },
    drawer: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30)
    },
    menuItemLink: {
      borderLeft: "4px solid transparent",
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(17), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(17), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(28)],
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(20),
      '&.active': {
        color: theme.colors.primary.string(),
        fontFamily: 'RedHatFontBold',
        borderColor: theme.colors.primary.string()
      }
    },
    menuItem: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(34),
      '&:last-child': {
        marginBottom: 0
      }
    },
    onClose: {
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      cursor: 'pointer',
      display: 'inline-flex'
    },
    socials: {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(0), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32)],
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(45),
      '& $socialsRow:first-child': {
        marginTop: 0
      }
    },
    label: {
      color: theme.colors.black.string(),
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23)
    },
    phone: {
      fontFamily: 'RedHatFont',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23)
    },
    socialIcon: {
      '& a': {
        backgroundColor: theme.colors.black.string(),
        display: 'inline-flex',
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32),
        borderRadius: '50%',
        padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(4)
      }
    },
    socialsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16)
    },
    cta: {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(28), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32), 0]
    },
    contactButton: {
      display: 'block',
      margin: '0 auto',
      width: '100%'
    }
  };
}));

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ "./src/components/header/navigation/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo */ "./src/components/header/logo/index.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools */ "./src/components/header/tools/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu */ "./src/components/header/menu.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/index.js";










function Hader() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["tabletSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, isTabletOrMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tools__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onToggleMenu: function onToggleMenu() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menu: _menu__WEBPACK_IMPORTED_MODULE_9__["menu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headlineAction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Contact us",
    className: styles.contactUs,
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })))));
}

/***/ }),

/***/ "./src/components/header/logo/index.js":
/*!*********************************************!*\
  !*** ./src/components/header/logo/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/logo/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/logo/index.js";



function Logo() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ./logo.svg */ "./src/components/header/logo/logo.svg"),
    className: styles.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/header/logo/logo.svg":
/*!*********************************************!*\
  !*** ./src/components/header/logo/logo.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5a533772.svg";

/***/ }),

/***/ "./src/components/header/logo/use-styles.js":
/*!**************************************************!*\
  !*** ./src/components/header/logo/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _logo;

  return {
    logo: (_logo = {
      display: 'flex',
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(95),
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(19)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_logo, theme.media.md_, {
      marginLeft: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_logo, theme.media.sm_, {
      width: '100%'
    }), _logo)
  };
}));

/***/ }),

/***/ "./src/components/header/menu.js":
/*!***************************************!*\
  !*** ./src/components/header/menu.js ***!
  \***************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages */ "./src/pages/index.js");

var menu = [{
  exact: true,
  title: 'Home',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["home"]
}, {
  exact: true,
  title: 'About',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["about"]
}, {
  exact: true,
  title: 'Clients',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["projects"]
}, {
  exact: true,
  title: 'Team',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["team"]
}, {
  exact: true,
  title: 'Join',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["join"]
}];

/***/ }),

/***/ "./src/components/header/navigation/index.js":
/*!***************************************************!*\
  !*** ./src/components/header/navigation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/navigation/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/navigation/index.js";



function Navigation(_ref) {
  var menu = _ref.menu;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styles.navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, menu.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "navigation-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      className: styles.navigationItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    })));
  }));
}

function Link(props) {
  if (props.route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: props.route.getPath(props.routeParams || {}),
      className: props.className,
      exact: props.hasOwnProperty('exact') ? props.exact : props.route.exact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }, props.title);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: props.link,
      className: props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }, props.title);
  }
}

/***/ }),

/***/ "./src/components/header/navigation/use-styles.js":
/*!********************************************************!*\
  !*** ./src/components/header/navigation/use-styles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    navigation: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'none',
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72),
      '& li:last-child': {
        '& $navigationItem': {
          marginRight: 0
        }
      }
    }, theme.media.md_, {
      display: 'flex'
    }),
    navigationItem: {
      display: 'inline-block',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), 0],
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      position: 'relative',
      transition: 'color .3s ease',
      '&:hover': {
        color: theme.colors.primary.string()
      },
      '&.active': {
        color: theme.colors.primary.string(),
        fontFamily: 'RedHatFontBold',
        borderColor: theme.colors.primary.string(),
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          border: "2px solid ".concat(theme.colors.primary)
        }
      }
    }
  };
}));

/***/ }),

/***/ "./src/components/header/tools/hamburger.svg":
/*!***************************************************!*\
  !*** ./src/components/header/tools/hamburger.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hamburger.b7aa773c.svg";

/***/ }),

/***/ "./src/components/header/tools/index.js":
/*!**********************************************!*\
  !*** ./src/components/header/tools/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tools; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer */ "./src/components/header/drawer/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu */ "./src/components/header/menu.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/tools/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/tools/index.js";




function Tools() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var toggleDrawer = function toggleDrawer(e) {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: toggleDrawer,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./hamburger.svg */ "./src/components/header/tools/hamburger.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDrawerClose: function onDrawerClose() {
      return setIsDrawerOpen(false);
    },
    isOpen: isDrawerOpen,
    menu: _menu__WEBPACK_IMPORTED_MODULE_3__["menu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/header/tools/use-styles.js":
/*!***************************************************!*\
  !*** ./src/components/header/tools/use-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {};
}));

/***/ }),

/***/ "./src/components/header/use-styles.js":
/*!*********************************************!*\
  !*** ./src/components/header/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    header: {
      backgroundColor: theme.colors.white.string(),
      boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.12)"
    },
    headline: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      alignItems: 'center',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10), 0]
    }, theme.media.md_, {
      padding: 0
    }),
    headlineAction: {
      marginLeft: 'auto'
    },
    contactUs: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.media._sm, {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)]
    })
  };
}));

/***/ }),

/***/ "./src/components/helmet-wrap/index.js":
/*!*********************************************!*\
  !*** ./src/components/helmet-wrap/index.js ***!
  \*********************************************/
/*! exports provided: HelmetWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmetWrap", function() { return HelmetWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/helmet-wrap/index.js";


var HelmetWrap = function HelmetWrap(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    title: props.title,
    meta: [{
      property: 'title',
      content: props.title
    }, {
      property: 'description',
      content: props.description
    }, {
      property: 'og:title',
      content: props.title
    }, {
      property: 'og:description',
      content: props.description
    }, {
      property: 'og:image',
      content: null
    }, {
      property: 'og:image:width',
      content: '578'
    }, {
      property: 'og:image:height',
      content: '325'
    }, {
      property: 'twitter:title',
      content: props.title
    }, {
      property: 'twitter:description',
      content: props.description
    }, {
      property: 'twitter:image',
      content: null
    }, {
      property: 'twitter:image:width',
      content: '578'
    }, {
      property: 'twitter:image:height',
      content: '325'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  });
};

/***/ }),

/***/ "./src/components/link/index.js":
/*!**************************************!*\
  !*** ./src/components/link/index.js ***!
  \**************************************/
/*! exports provided: CustomLink, CustomHashLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLink", function() { return CustomLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHashLink", function() { return CustomHashLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-hash-link */ "react-router-hash-link");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/link/use-styles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/link/index.js";





function CustomLink(_ref) {
  var url = _ref.url,
      title = _ref.title,
      white = _ref.white,
      className = _ref.className;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: url,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(styles.link, white && styles.linkWhite, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, title);
}
var CustomHashLink = function CustomHashLink(_ref2) {
  var url = _ref2.url,
      title = _ref2.title,
      className = _ref2.className,
      smooth = _ref2.smooth;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["HashLink"], {
    to: url,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(styles.hashLink, className),
    smooth: smooth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, title);
};

/***/ }),

/***/ "./src/components/link/use-styles.js":
/*!*******************************************!*\
  !*** ./src/components/link/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    link: {
      display: 'inline-block',
      position: 'relative',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      fontFamily: 'RedHatFontBold',
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.colors.primary.string(),
        transform: 'scaleX(0.5)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s'
      },
      '&:hover': {
        '&:after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
        '&:before': {
          animation: '1.2s fadeIn',
          animationFillMode: 'forwards'
        }
      }
    },
    linkWhite: {
      color: theme.colors.white.string(),
      '&:after': {
        backgroundColor: theme.colors.white.string()
      },
      '&:before': {
        position: 'absolute',
        content: '""',
        right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(-30),
        top: '50%',
        maskImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
        maskSize: 'cover',
        backgroundColor: theme.colors.white.string(),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
        transform: 'translate(0, -50%)'
      }
    },
    hashLink: {
      display: 'block',
      border: "1px solid ".concat(theme.colors.black.string()),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(14), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32)],
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
      fontFamily: 'RedHatFontBold',
      cursor: 'pointer',
      transition: '.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.black.string(),
        color: theme.colors.white.string()
      }
    }
  };
}));

/***/ }),

/***/ "./src/components/project/index.js":
/*!*****************************************!*\
  !*** ./src/components/project/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/project/use-styles.js");
/* harmony import */ var helpers_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/type */ "./src/helpers/type.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api */ "./src/api/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/project/index.js";





function Project(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var typeToStr = Object(helpers_type__WEBPACK_IMPORTED_MODULE_3__["default"])(props.type);
  var stackToString = props.stack.map(function (_ref) {
    var name = _ref.name;
    return name;
  }).join(', ');
  var teamToString = props.team.map(function (_ref2) {
    var shortName = _ref2.shortName;
    return shortName;
  }).join(', ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.project,
    style: {
      backgroundImage: props.url ? "url(".concat(api__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "/image/").concat(props.url, ")") : "url(".concat(__webpack_require__("./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$")("./project-img-".concat(props.index, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/projects/".concat(props.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.url ? "".concat(api__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "/image/").concat(props.logo) : __webpack_require__("./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$")("./logo-icon-".concat(props.index, ".png")),
    className: styles.projectLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, props.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectMiddle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, "Client:\xA0"), props.client), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, "Sector:\xA0"), props.sector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, "Type:\xA0"), typeToStr), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, "Tech stack:\xA0"), stackToString), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }, "Team:\xA0"), teamToString)))));
}

/***/ }),

/***/ "./src/components/project/use-styles.js":
/*!**********************************************!*\
  !*** ./src/components/project/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _project, _projectInfo, _projectTitle, _projectDescription, _text;

  return {
    project: (_project = {
      margin: '0',
      flex: '0 1 100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      marginBottom: '8px',
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, theme.media.sm_, {
      flex: '0 calc(50% - 16px)',
      minHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(200),
      margin: '8px',
      '&:nth-last-of-type(-n + 2)': {
        margin: '8px 8px 0 0'
      }
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, theme.media.md_, {
      minHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(495),
      maxHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(604)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, '&:before', {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundImage: theme.gradients.primary,
      transition: 'opacity 0.3s ease',
      opacity: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, '&:hover', {
      '&:before': {
        opacity: 1
      },
      '& [class^="projectDescription"], & [class^="projectMiddle"], & [class^="projectBottom"]': {
        opacity: 1
      }
    }), _project),
    projectInfo: (_projectInfo = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      padding: '24px 12px',
      position: 'relative',
      zIndex: 3,
      height: '100%'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, "width", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, theme.media.sm_, {
      padding: '20px 15px'
    }), _projectInfo),
    projectTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%'
    },
    projectTitle: (_projectTitle = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      fontFamily: 'RedHatFontBold'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectTitle, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectTitle, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)
    }), _projectTitle),
    projectDescription: (_projectDescription = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(14),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      opacity: 0
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectDescription, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(0)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectDescription, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _projectDescription),
    projectMiddle: {
      opacity: 0,
      padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      backgroundColor: theme.colors.white.string(),
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
      cursor: 'pointer',
      position: 'absolute',
      display: 'flex',
      top: '50%',
      left: ' 50%',
      transform: 'translate(-50%, -50%)',
      '& img': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
      }, theme.media.sm_, {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)
      })
    },
    projectBottom: {
      marginTop: 'auto',
      opacity: 0
    },
    projectLogo: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(7),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(110)
    },
    text: (_text = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
      fontFamily: 'RedHatFont',
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(0)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, '&:last-child', {
      marginBottom: 0
    }), _text),
    header: {
      fontFamily: 'RedHatFontBold'
    }
  };
}));

/***/ }),

/***/ "./src/components/specification/index.js":
/*!***********************************************!*\
  !*** ./src/components/specification/index.js ***!
  \***********************************************/
/*! exports provided: Specification, SpecificationProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Specification", function() { return Specification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationProject", function() { return SpecificationProject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var helpers_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/type */ "./src/helpers/type.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/components/specification/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/specification/index.js";





function Specification(_ref) {
  var title = _ref.title,
      heading = _ref.heading,
      description = _ref.description,
      details = _ref.details;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.specification,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header1"], {
    title: heading,
    className: styles.customHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.infoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Description1"], {
    title: description,
    className: styles.topDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workInfoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header4"], {
    title: title,
    className: styles.customHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), details && details.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item._id,
      className: styles.workDescription,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.workHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, item.position, ":", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.workText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, item.clients.map(function (client) {
      return client.name;
    }).join(', ')));
  })))));
}
var SpecificationProject = function SpecificationProject(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var typeToStr = Object(helpers_type__WEBPACK_IMPORTED_MODULE_3__["default"])(props.type);
  var technologiesToString, teamToString;

  if (props.technologies) {
    technologiesToString = props.technologies.map(function (item) {
      return item.name;
    }).join(', ');
  }

  if (props.team) {
    teamToString = props.team.map(function (item) {
      return item.shortName;
    }).join(', ');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.specification,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header1"], {
    title: props.title,
    className: styles.customHead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.infoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Description1"], {
    title: props.description,
    className: styles.topDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workInfoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }
  }, "Sector: "), props.sector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, props.sector.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 8
    }
  }, "Type: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 8
    }
  }, typeToStr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, "Tech stack: "), props.technologies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, technologiesToString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.workDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 8
    }
  }, "Team: "), props.team && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.workText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, teamToString))))));
};

/***/ }),

/***/ "./src/components/specification/use-styles.js":
/*!****************************************************!*\
  !*** ./src/components/specification/use-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _customHead;

  return {
    specification: {},
    infoWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    }, theme.media.md_, {
      flexDirection: 'row'
    }),
    workInfoWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }, theme.media.md_, {
      paddingTop: 0
    }),
    topDescription: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      whiteSpace: 'pre-wrap',
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(600),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(480)
    }),
    customHeading: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    },
    workDescription: {
      color: theme.colors.darkGray.string(),
      fontFamily: 'RedHatFont',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(5)
    },
    workHeading: {
      fontFamily: 'RedHatFontBold'
    },
    workText: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      textDecoration: 'underline'
    }, theme.media.sm_, {
      textDecoration: 'none'
    }),
    customHead: (_customHead = {
      whiteSpace: 'pre-wrap',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      lineHeight: '100%'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_customHead, theme.media.sm_, {
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(50),
      whiteSpace: 'nowrap'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_customHead, theme.media.md_, {
      whiteSpace: 'pre-wrap',
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }), _customHead)
  };
}));

/***/ }),

/***/ "./src/components/tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/tabs/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/tabs/use-styles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/tabs/index.js";






function Tabs(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var data = props.data;
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_6__["mobileSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.tabsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.tabsControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: item.id,
      index: index,
      title: item.title,
      onItemClicked: function onItemClicked() {
        return setActive(index);
      },
      isActive: active === index
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }
    }));
  })), !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.tabsView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, data.map(function (item, index) {
    if (active === index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: item.id,
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(styles.tabsViewItem, 'active'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, props.solutions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "viewRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styles.paragraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 12
        }
      }, item.description)) : item.tech.map(function (elem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "viewRow",
          key: "tabs-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 14
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
          title: item.link,
          url: "/#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          className: styles.icon,
          src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 14
          }
        }, elem));
      }));
    }
  })));
}

var TabItem = function TabItem(_ref) {
  var _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$onItemClicked = _ref.onItemClicked,
      onItemClicked = _ref$onItemClicked === void 0 ? function () {
    return console.error('no action');
  } : _ref$onItemClicked,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      _ref$solutions = _ref.solutions,
      solutions = _ref$solutions === void 0 ? false : _ref$solutions,
      data = _ref.data;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var iconName = solutions ? 'solutions' : 'tech';
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_6__["mobileSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(styles.tabsControlItem, isActive && 'active'),
    onClick: onItemClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(iconName, "-icon-").concat(index, ".svg")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.chevron,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/chevron.svg */ "./src/assets/icons/chevron.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }))), isActive && isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.dropDownMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, data.map(function (item, itemIndex) {
    if (index === itemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(styles.tabsViewItem, 'active'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, solutions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "viewRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styles.paragraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 12
        }
      }, item.description)) : item.tech.map(function (elem) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "viewRow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 14
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
          title: item.link,
          url: "/#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          className: styles.icon,
          src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 14
          }
        }, elem));
      }));
    }
  })));
};

/***/ }),

/***/ "./src/components/tabs/use-styles.js":
/*!*******************************************!*\
  !*** ./src/components/tabs/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _active, _tabsControlItem, _chevron, _viewRow, _tabsViewItem;

  return {
    tabsWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center'
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70)
    }),
    tabsControl: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(430)
    }, theme.media.sm_, {
      paddingRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }),
    tabsControlItem: (_tabsControlItem = {
      display: 'flex',
      alignItems: 'center',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      cursor: 'pointer',
      position: 'relative',
      marginBottom: 0,
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(19), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23)]
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsControlItem, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
      padding: 0,
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(22)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsControlItem, '&:last-of-type', {
      marginBottom: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsControlItem, '& > img', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38)
    }, theme.media.sm_, {
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48)
    })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsControlItem, '&.active', (_active = {
      fontFamily: 'RedHatFontBold',
      backgroundColor: theme.gradients.gray,
      '& $chevron': {
        transform: 'rotate(0deg)'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_active, theme.media.sm_, {
      backgroundColor: 'transparent'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_active, '&:before', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'absolute',
      content: 'unset',
      top: '50%',
      left: '-45px',
      height: '4px',
      width: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.colors.primary.string()
    }, theme.media.sm_, {
      content: '""'
    })), _active)), _tabsControlItem),
    tabsView: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: [0, 0, 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(90)],
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(450),
      borderLeft: "1px solid ".concat(theme.colors.black.string())
    },
    paragraph: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      fontWeight: 400,
      fontFamily: 'RedHatFont',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(22)
    },
    chevron: (_chevron = {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      transform: 'rotate(180deg)',
      marginLeft: 'auto',
      display: 'block'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_chevron, theme.media.sm_, {
      display: 'none'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_chevron, '& > img', {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18)
    }), _chevron),
    tabsViewItem: (_tabsViewItem = {
      display: 'none',
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      alignItems: 'flex-start',
      flexDirection: 'column'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsViewItem, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsViewItem, '& .viewRow', (_viewRow = {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      position: 'relative',
      '& span': {
        display: 'none'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_viewRow, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35),
      '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        content: '""',
        position: 'absolute',
        top: '50%',
        right: '-28px',
        transform: 'translate(-0%, -50%)',
        backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
        backgroundSize: 'cover',
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
      }, theme.media.sm_, {
        content: 'unset'
      }),
      '& span': {
        width: 0,
        overflow: 'hidden',
        transition: 'width 1s',
        whiteSpace: 'nowrap',
        fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        fontFamily: 'RedHatFontBold',
        display: 'flex'
      },
      '&:hover': {
        '& span': {
          width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(190)
        }
      }
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_viewRow, '& p', {
      fontFamily: 'RedHatFontBold'
    }), _viewRow)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsViewItem, '&.active', {
      display: 'flex'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tabsViewItem, '&:last-of-type', {
      marginBottom: 0
    }), _tabsViewItem),
    tabsViewItemMobile: {
      '&.active': {
        backgroundColor: theme.gradients.gray
      }
    },
    dropDownMobile: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      backgroundColor: theme.gradients.gray,
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23)]
    }, theme.media.sm_, {
      backgroundColor: 'transparent',
      padding: 0
    }),
    icon: {
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
    }
  };
}));

/***/ }),

/***/ "./src/components/typography/index.js":
/*!********************************************!*\
  !*** ./src/components/typography/index.js ***!
  \********************************************/
/*! exports provided: Header1, Header2, Header3, Header4, Description1, Description3, Description6, Caption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header1", function() { return Header1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header2", function() { return Header2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header3", function() { return Header3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header4", function() { return Header4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description1", function() { return Description1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description3", function() { return Description3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description6", function() { return Description6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/typography/use-styles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/typography/index.js";



function Header1(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.header, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, props.title);
}
function Header2(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.header2, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, props.title);
}
function Header3(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.header3, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, props.title);
}
function Header4(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.header4, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, props.title);
}
function Description1(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.description, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, props.title);
}
function Description3(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.description3, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, props.title);
}
function Description6(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.description6, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }
  }, props.title);
}
function Caption(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.caption, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, props.title);
}

/***/ }),

/***/ "./src/components/typography/use-styles.js":
/*!*************************************************!*\
  !*** ./src/components/typography/use-styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    header: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(26),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(33),
      color: theme.colors.black.string()
    }, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      lineHeight: 'initial'
    }),
    header2: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      color: theme.colors.darkGray.string()
    }, theme.media.xs_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)
    }),
    header4: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontFamily: 'RedHatFontBold',
      color: theme.colors.darkGray.string()
    },
    header3: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      fontFamily: 'RedHatFontBold',
      color: theme.colors.black.string()
    },
    description: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      fontWeight: 400,
      lineHeight: '150%'
    }, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      lineHeight: 'initial'
    }),
    description3: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontWeight: 400,
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18)
    }),
    description6: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(14),
      fontFamily: 'RedHatFont',
      fontWeight: 400,
      color: theme.colors.darkGray.string(),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(21)
    }, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      lineHeight: '150%'
    }),
    caption: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      color: theme.colors.white.string(),
      fontFamily: 'RedHatFontBold'
    }
  };
}));

/***/ }),

/***/ "./src/components/wrap/index.js":
/*!**************************************!*\
  !*** ./src/components/wrap/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/wrap/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/wrap/index.js";


function Wrap(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.wrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.children);
}

/***/ }),

/***/ "./src/components/wrap/use-styles.js":
/*!*******************************************!*\
  !*** ./src/components/wrap/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    wrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      maxWidth: '1440px',
      width: '100%',
      margin: [0, 'auto'],
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)]
    }, theme.media.md_, {
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(90)]
    })
  };
}));

/***/ }),

/***/ "./src/config/jss/default-unit.js":
/*!****************************************!*\
  !*** ./src/config/jss/default-unit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'line-height': 'rem',
  'font-size': 'rem',
  'width': 'rem',
  'height': 'rem',
  'min-width': 'rem',
  'min-height': 'rem',
  'max-width': 'rem',
  'max-height': 'rem',
  'margin': 'rem',
  'margin-top': 'rem',
  'margin-right': 'rem',
  'margin-bottom': 'rem',
  'margin-left': 'rem',
  'padding': 'rem',
  'padding-top': 'rem',
  'padding-right': 'rem',
  'padding-bottom': 'rem',
  'padding-left': 'rem',
  'top': 'rem',
  'right': 'rem',
  'bottom': 'rem',
  'left': 'rem',
  'border-radius': 'rem'
});

/***/ }),

/***/ "./src/config/jss/theme.js":
/*!*********************************!*\
  !*** ./src/config/jss/theme.js ***!
  \*********************************/
/*! exports provided: sizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var sizes = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

function media(min, max) {
  min = sizes[min] || min;
  max = sizes[max] || max;
  min = min && "(min-width: ".concat(min, "px)");
  max = max && "(max-width: ".concat(max, "px)");
  return "@media ".concat([min, max].filter(Boolean).join(' and '));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  media: _objectSpread({
    xs_: media('xs'),
    sm_: media('sm'),
    md_: media('md'),
    lg_: media('lg'),
    xl_: media('xl'),
    _xs: media(null, 'xs'),
    _sm: media(null, 'sm'),
    _md: media(null, 'md'),
    _lg: media(null, 'lg'),
    _xl: media(null, 'xl'),
    xs_sm: media('xs', 'sm'),
    sm_md: media('sm', 'md'),
    md_lg: media('md', 'lg'),
    lg_xl: media('lg', 'xl'),
    custom: media
  }, sizes),
  colors: {
    white: color__WEBPACK_IMPORTED_MODULE_1___default()('#FFFFFF'),
    black: color__WEBPACK_IMPORTED_MODULE_1___default()('#000000'),
    primary: color__WEBPACK_IMPORTED_MODULE_1___default()('#118ae0'),
    navyBlue: color__WEBPACK_IMPORTED_MODULE_1___default()('#1e2f78'),
    darkGray: color__WEBPACK_IMPORTED_MODULE_1___default()('#202124'),
    lightGray: color__WEBPACK_IMPORTED_MODULE_1___default()('#d9d9d9')
  },
  gradients: {
    primary: "linear-gradient(270deg, rgba(17, 138, 224, 0.1) 0%, #1e2f78 100%)",
    secondary: "linear-gradient(90.33deg, #1e2f78 0.27%, #118ae0 96.55%)",
    white: "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)",
    gray: "rgba(32, 33, 36, 0.04)"
  }
});

/***/ }),

/***/ "./src/config/jss/use-styles.js":
/*!**************************************!*\
  !*** ./src/config/jss/use-styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    '@global': {
      '*': {
        fontFamily: 'RedHatFont'
      },
      html: {
        boxSizing: 'border-box',
        overflowX: 'hidden'
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit'
      },
      body: {
        backgroundColor: theme.colors.white.string(),
        margin: 0,
        padding: 0,
        fontSize: '16px',
        overflowX: 'hidden'
      },
      'ul, ol': {
        paddingLeft: 0,
        margin: 0,
        listStyle: 'none'
      },
      li: {
        padding: 0
      },
      'p, h1, h2, h3, h4, h5, h6 ': {
        margin: 0,
        padding: 0
      },
      a: {
        textDecoration: 'none',
        color: theme.colors.black.string()
      },
      button: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }
  };
}));

/***/ }),

/***/ "./src/helpers/breakpoints.js":
/*!************************************!*\
  !*** ./src/helpers/breakpoints.js ***!
  \************************************/
/*! exports provided: mobileSize, tabletSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSize", function() { return mobileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabletSize", function() { return tabletSize; });
/* harmony import */ var config_jss_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/jss/theme */ "./src/config/jss/theme.js");

var mobileSize = {
  query: "(max-width: ".concat(config_jss_theme__WEBPACK_IMPORTED_MODULE_0__["sizes"].sm, "px)")
};
var tabletSize = {
  query: "(max-width: ".concat(config_jss_theme__WEBPACK_IMPORTED_MODULE_0__["sizes"].md, "px)")
};

/***/ }),

/***/ "./src/helpers/dragScroll.js":
/*!***********************************!*\
  !*** ./src/helpers/dragScroll.js ***!
  \***********************************/
/*! exports provided: DragScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScroll", function() { return DragScroll; });
function DragScroll(element) {
  var ele = document.getElementById(element);
  ele.style.cursor = 'grab';
  var pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };

  var mouseDownHandler = function mouseDownHandler(e) {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  var mouseMoveHandler = function mouseMoveHandler(e) {
    var dx = e.clientX - pos.x;
    var dy = e.clientY - pos.y;
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  var mouseUpHandler = function mouseUpHandler() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  ele.addEventListener('mousedown', mouseDownHandler);
}

/***/ }),

/***/ "./src/helpers/size.js":
/*!*****************************!*\
  !*** ./src/helpers/size.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return size; });
function size(target) {
  var baseSize = 16;
  return target / baseSize;
}

/***/ }),

/***/ "./src/helpers/string.js":
/*!*******************************!*\
  !*** ./src/helpers/string.js ***!
  \*******************************/
/*! exports provided: getUrlFromPath, doCapitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlFromPath", function() { return getUrlFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCapitalize", function() { return doCapitalize; });
function getUrlFromPath(path) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return path.replace(/\?/g, '').replace(/:([\w_-]+)/g, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return params[args[1]] || args[0];
  }).replace(/\/\//g, '/').replace(/\/$/, '');
}
function doCapitalize() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./src/helpers/type.js":
/*!*****************************!*\
  !*** ./src/helpers/type.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var typeToString = function typeToString(type) {
  var typeString;

  switch (type) {
    case 0:
      typeString = 'Mobile App';
      break;

    case 1:
      typeString = 'Web App';
      break;

    case 2:
      typeString = 'Desktop App';
      break;
  }

  return typeString;
};

/* harmony default export */ __webpack_exports__["default"] = (typeToString);

/***/ }),

/***/ "./src/hooks/ScrollToTop.js":
/*!**********************************!*\
  !*** ./src/hooks/ScrollToTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function ScrollToTop(_ref) {
  var history = _ref.history;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unlisten = history.listen(function () {
      return window.scrollTo(0, 0);
    });
    return function () {
      return unlisten();
    };
  }, []);
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "./src/hooks/use-layout.js":
/*!*********************************!*\
  !*** ./src/hooks/use-layout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayout; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useLayout() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showLayout = _useState2[0],
      setShowLayout = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setShowLayout(true);
  }, []);
  return showLayout;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);


var app = __webpack_require__(/*! ./server */ "./src/server.js")["default"];

var server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(app);
var currentApp = app;
server.listen("3000" || false, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');
  module.hot.accept(/*! ./server */ "./src/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = __webpack_require__(/*! ./server */ "./src/server.js")["default"];
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}

/***/ }),

/***/ "./src/pages/about/index.js":
/*!**********************************!*\
  !*** ./src/pages/about/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _vision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vision */ "./src/pages/about/vision/index.js");
/* harmony import */ var _solutions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solutions */ "./src/pages/about/solutions/index.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story */ "./src/pages/about/story/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/use-styles.js");
/* harmony import */ var actions_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/about */ "./src/actions/about.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/index.js";











function About() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var fetchAboutInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(actions_about__WEBPACK_IMPORTED_MODULE_9__["getAboutInfo"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchAboutInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vision__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_solutions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_story__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_7__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/about/solutions/index.js":
/*!********************************************!*\
  !*** ./src/pages/about/solutions/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/solutions/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/solutions/index.js";







function Solutions() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.AboutInfo;
  }),
      data = _useSelector.data;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var tabs = data.help.map(function (item) {
    return {
      title: item.heading,
      description: item.info,
      id: item._id
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.solutions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    title: "How TGA can help you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.captionOffset,
    title: "Different solutions and high quality service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: tabs,
    solutions: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Solutions);

/***/ }),

/***/ "./src/pages/about/solutions/use-styles.js":
/*!*************************************************!*\
  !*** ./src/pages/about/solutions/use-styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _solutions;

  return {
    solutions: (_solutions = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_solutions, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_solutions, "captionOffset", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    })), _solutions)
  };
}));

/***/ }),

/***/ "./src/pages/about/story/index.js":
/*!****************************************!*\
  !*** ./src/pages/about/story/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/story/use-styles.js");
/* harmony import */ var helpers_dragScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/dragScroll */ "./src/helpers/dragScroll.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/story/index.js";







function OurStory() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(helpers_dragScroll__WEBPACK_IMPORTED_MODULE_5__["DragScroll"])('timeline');
  }, []);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.AboutInfo;
  }),
      data = _useSelector.data;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.story,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Story of TGA and Founders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.timelineWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "timeline",
    className: styles.timeline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, data.timeLine.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.circle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 10
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: styles.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, item.info)));
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurStory);

/***/ }),

/***/ "./src/pages/about/story/use-styles.js":
/*!*********************************************!*\
  !*** ./src/pages/about/story/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _li, _ol, _timeline;

  return {
    story: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(90)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }),
    timelineWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.media.sm_, {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        height: '100%',
        width: '50px',
        background: theme.gradients.white,
        right: 0,
        top: 0
      }
    }),
    timeline: (_timeline = {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32),
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      whiteSpace: 'nowrap',
      '&::-webkit-scrollbar-thumb': {
        display: 'none'
      },
      '&::-webkit-scrollbar': {
        display: 'none',
        width: '0px',
        background: 'transparent'
      },
      'scrollbar-width': 'none'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_timeline, theme.media.md_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(200),
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
      overflowX: 'scroll',
      overflowY: 'hidden'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_timeline, '& > ol', (_ol = {
      fontSize: 0,
      position: 'relative'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ol, theme.media.md_, {
      position: 'static',
      width: '100vw',
      transition: 'all 1s'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ol, '&:before', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      content: "''",
      borderLeft: "1px solid ".concat(theme.colors.black.string()),
      position: 'absolute',
      top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      height: '100%'
    }, theme.media.md_, {
      content: 'none'
    })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ol, '& > li', (_li = {
      position: 'relative',
      display: 'block',
      listStyleType: 'none',
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      '&:last-child': {
        "float": 'inline-end'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_li, theme.media.md_, {
      display: 'inline-block',
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(434),
      height: '1px',
      marginLeft: 0,
      background: theme.colors.black.string(),
      '&:last-child': {
        "float": 'none',
        background: 'transparent',
        '& $info': {
          left: 0
        }
      }
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_li, '& $circle', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      content: "''",
      cursor: 'pointer',
      position: 'absolute',
      top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(-7),
      left: 0,
      bottom: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(-7),
      borderRadius: '50%',
      background: theme.colors.primary.string(),
      zIndex: 8,
      '&:first-child': {
        left: 0
      }
    }, theme.media.md_, {
      top: '50%',
      marginTop: 0,
      marginLeft: 0,
      transform: 'translatey(-50%)'
    })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_li, '& $info', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23),
      paddingBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(44),
      width: '100%'
    }, theme.media.md_, {
      position: 'absolute',
      marginLeft: 0,
      paddingBottom: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(405),
      left: 0,
      top: '25px'
    })), _li)), _ol)), _timeline),
    circle: {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      display: 'flex',
      '&:hover:before, &:hover:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: '50%',
        border: "1px solid ".concat(theme.colors.primary.string())
      },
      '&:hover': {
        animation: '.25s ease, width .25s ease'
      },
      '&:hover:before': {
        animation: 'ripple 1s linear infinite'
      },
      '&:hover:after': {
        animation: 'ripple 1s linear 0.5s infinite'
      },
      '&:before, &:after': {
        animation: 'none'
      }
    },
    text: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontFamily: 'RedHatFont',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      color: theme.colors.black.string(),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      paddingRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }, theme.media.md_, {
      paddingRight: 0
    }),
    info: {
      whiteSpace: 'normal'
    },
    year: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      fontFamily: 'RedHatFontBold',
      color: theme.colors.black.string()
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(1)'
      },
      '75%': {
        transform: 'scale(2.75)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0
      }
    }
  };
}));

/***/ }),

/***/ "./src/pages/about/use-styles.js":
/*!***************************************!*\
  !*** ./src/pages/about/use-styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    contacts: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    })
  };
}));

/***/ }),

/***/ "./src/pages/about/vision/index.js":
/*!*****************************************!*\
  !*** ./src/pages/about/vision/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_advantage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/advantage */ "./src/components/advantage/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/vision/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/vision/index.js";







function OurVision() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.AboutInfo;
  }),
      data = _useSelector.data;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.vision,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Our visions and goals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.goalsList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, data.visions.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_advantage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item._id,
      title: item.heading,
      description: item.info,
      src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/vision\\-icon\\-.*\\.svg$")("./vision-icon-".concat(index, ".svg")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 8
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurVision);

/***/ }),

/***/ "./src/pages/about/vision/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/about/vision/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _goalsList;

  return {
    vision: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    goalsList: (_goalsList = {
      display: 'flex',
      flexDirection: 'column'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_goalsList, theme.media.sm_, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_goalsList, theme.media.md_, {
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _goalsList)
  };
}));

/***/ }),

/***/ "./src/pages/create-route.js":
/*!***********************************!*\
  !*** ./src/pages/create-route.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createRoute; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/string */ "./src/helpers/string.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function createRoute(config) {
  return _objectSpread(_objectSpread({}, config), {}, {
    getPath: function getPath(params) {
      return Object(helpers_string__WEBPACK_IMPORTED_MODULE_1__["getUrlFromPath"])(config.path, params).replace(/\/\:\w+/ig, '');
    }
  });
}

/***/ }),

/***/ "./src/pages/crewman/carousel/index.js":
/*!*********************************************!*\
  !*** ./src/pages/crewman/carousel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/crewman/carousel/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/carousel */ "./src/components/carousel/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/carousel/index.js";











var CrewCarousel = function CrewCarousel() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.TeamAll;
  }),
      team = _useSelector.team;

  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_5__["mobileSize"]);
  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_5__["tabletSize"]);
  var slidesToShow = isMobile ? 1 : isTablet ? 2 : 4;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var fetchTeamAll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_10__["getTeamAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setWidth(isMobile);
    fetchTeamAll();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: styles.crewCarousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_8__["Header1"], {
    title: "Other project managers in our company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    variableWidth: width,
    className: styles.customCarousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, team.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_9__["CrewCard"], {
      name: item.name,
      bio: item.roles,
      photos: [item.imageKeys.professional, item.imageKeys.smiley],
      url: item.slug,
      index: index,
      key: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CrewCarousel);

/***/ }),

/***/ "./src/pages/crewman/carousel/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/crewman/carousel/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _crewCarousel, _firstChild, _lastChild;

  return {
    crewCarousel: (_crewCarousel = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_crewCarousel, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(110)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_crewCarousel, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(180)
    }), _crewCarousel),
    customCarousel: {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      '& .slick-slider': {
        '& button': {
          backgroundColor: theme.colors.white.string(),
          top: 'calc(50% - 60px)',
          '&:first-child': (_firstChild = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_firstChild, theme.media.sm_, {
            left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(-5)
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_firstChild, theme.media.md_, {
            left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
          }), _firstChild),
          '&:last-child': (_lastChild = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lastChild, theme.media.sm_, {
            right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(5)
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lastChild, theme.media.md_, {
            right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
          }), _lastChild)
        },
        '& .slick-list': {
          margin: '0 -10px'
        },
        '& .slick-slide': {
          '& > div': {
            display: 'flex',
            justifyContent: 'center',
            marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
          }
        }
      }
    }
  };
}));

/***/ }),

/***/ "./src/pages/crewman/index.js":
/*!************************************!*\
  !*** ./src/pages/crewman/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information */ "./src/pages/crewman/information/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ "./src/pages/crewman/projects/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel */ "./src/pages/crewman/carousel/index.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");
/* harmony import */ var actions_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/project */ "./src/actions/project.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-styles */ "./src/pages/crewman/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/index.js";












var CrewMan = function CrewMan(_ref) {
  var match = _ref.match;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var memberId = match.params.id;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamMember.member._id;
  });
  var fetchTeamMember = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_8__["getTeamMember"])(memberId));
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchTeamMember();
    id && dispatch(Object(actions_project__WEBPACK_IMPORTED_MODULE_9__["getProjectMember"])(id));
  }, [id]);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.crewMan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_information__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }));
};

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CrewMan);

/***/ }),

/***/ "./src/pages/crewman/information/index.js":
/*!************************************************!*\
  !*** ./src/pages/crewman/information/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_specification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/specification */ "./src/components/specification/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/information/index.js";




function Information() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamMember;
  }),
      member = _useSelector.member;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_specification__WEBPACK_IMPORTED_MODULE_2__["Specification"], {
    title: 'Work and projects',
    heading: member.name,
    description: member.bio,
    details: member.workedOn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ }),

/***/ "./src/pages/crewman/projects/index.js":
/*!*********************************************!*\
  !*** ./src/pages/crewman/projects/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/project */ "./src/components/project/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/crewman/projects/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/projects/index.js";






var Projects = function Projects() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectMember;
  }),
      projectMember = _useSelector.projectMember;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, projectMember.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item._id,
      title: item.title,
      description: item.description,
      client: item.client.name,
      sector: item.sector.name,
      type: item.type,
      stack: item.technologies,
      team: item.team,
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/pages/crewman/projects/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/crewman/projects/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    projectList: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), 0, 0]
    }, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70), 0, 0]
    })
  };
}));

/***/ }),

/***/ "./src/pages/crewman/use-styles.js":
/*!*****************************************!*\
  !*** ./src/pages/crewman/use-styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _contacts;

  return {
    crewMan: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    contacts: (_contacts = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(130)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _contacts)
  };
}));

/***/ }),

/***/ "./src/pages/error/index.js":
/*!**********************************!*\
  !*** ./src/pages/error/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/pages/error/use-styles.js");
/* harmony import */ var components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/error */ "./src/components/error/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/error/index.js";




function NotFound() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.errorPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/pages/error/use-styles.js":
/*!***************************************!*\
  !*** ./src/pages/error/use-styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    errorPage: {
      height: 'calc(100vh - 198px)',
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(-135)
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/clients/index.js":
/*!*****************************************!*\
  !*** ./src/pages/home/clients/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ "./src/pages/home/clients/item/index.js");
/* harmony import */ var components_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/carousel */ "./src/components/carousel/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/clients/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/clients/index.js";











var Clients = function Clients() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ClientAll;
  });
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__["mobileSize"]);
  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__["tabletSize"]);
  var slidesToShow = isMobile ? 2 : isTablet ? 3 : 4;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.clients,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.clientsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    className: styles.topHeader,
    title: "Main clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.topDescription,
    title: payload.clientsFieldDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_2__["CustomHashLink"], {
    smooth: true,
    url: '/#contact',
    className: styles.customLink,
    title: "Become a client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.clientsSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    variableWidth: false,
    autoPlay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, payload.clients.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: item._id,
      path: item.logoKey,
      url: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 8
      }
    });
  }))), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_2__["CustomHashLink"], {
    smooth: true,
    url: '/#contact',
    className: styles.customLink,
    title: "Become a client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ }),

/***/ "./src/pages/home/clients/item/index.js":
/*!**********************************************!*\
  !*** ./src/pages/home/clients/item/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/clients/item/use-styles.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ "./src/api/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/clients/item/index.js";




function SlideItem(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.slideItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.logo,
    style: {
      backgroundImage: "url(".concat(api__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/image/").concat(props.path, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_1__["CustomLink"], {
    className: styles.linkHover,
    title: "Show case study",
    url: "/projects/".concat(props.url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/pages/home/clients/item/use-styles.js":
/*!***************************************************!*\
  !*** ./src/pages/home/clients/item/use-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    slideItem: {
      '& logo': {
        filter: 'grayscale(1)',
        transition: 'all .3s ease'
      },
      '&:hover': {
        '& $linkHover': {
          opacity: 1,
          paddingTop: '10px',
          transform: 'translateY(0)'
        },
        '& $logo': {
          filter: 'grayscale(0)'
        }
      }
    },
    linkHover: {
      opacity: 0,
      transform: 'translateY(40px)',
      transition: 'transform .3s ease'
    },
    logo: {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(130),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(35),
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      filter: 'grayscale(1)',
      transition: 'filter .3s ease'
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/clients/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/home/clients/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _slickList;

  return {
    clients: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }),
    topHeader: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    }),
    clientsWrap: {
      display: 'flex',
      alignItems: 'center'
    },
    action: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginLeft: 'auto',
      display: 'none'
    }, theme.media.sm_, {
      display: 'flex'
    }),
    clientsSlider: {
      '& .slick-list': (_slickList = {
        margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(34), 'auto', Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(34)],
        width: '100%'
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_slickList, theme.media.sm_, {
        margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(150), 'auto', 0],
        width: 'calc(100% - 80px)'
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_slickList, '& .slick-slide', {
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(130),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }), _slickList)
    },
    customLink: {
      margin: '0 auto'
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/domain/index.js":
/*!****************************************!*\
  !*** ./src/pages/home/domain/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ "./src/pages/home/domain/item/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/domain/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/domain/index.js";






function Top() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.DomainAll;
  });
  var payloadHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.domain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: payloadHome.sectorFieldName,
    className: styles.headerOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Description1"], {
    className: styles.descriptionOffset,
    title: payloadHome.sectorFieldDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.sectorList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, payload.domains.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item._id,
      title: item.name,
      description: 'Discover Projects',
      url: item.imageKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 8
      }
    });
  }))));
}

/***/ }),

/***/ "./src/pages/home/domain/item/index.js":
/*!*********************************************!*\
  !*** ./src/pages/home/domain/item/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomainItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/domain/item/use-styles.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ "./src/api/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/domain/item/index.js";




function DomainItem(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.item,
    style: {
      backgroundImage: "url(".concat(api__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/image/").concat(props.url, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.innerWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Caption"], {
    className: styles.captionStyle,
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.itemHover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.itemHoverText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, props.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })))));
}

/***/ }),

/***/ "./src/pages/home/domain/item/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/home/domain/item/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _item;

  return {
    item: (_item = {
      margin: [0, 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), 0],
      flex: '0 1 100%',
      height: 'auto',
      backgroundSize: 'cover',
      position: 'relative',
      zIndex: 9,
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.sm_, {
      flex: '1 0 30%',
      margin: '1px',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(350)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.md_, {
      flex: '0 1 calc(20% - 2px)'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, '&:hover', {
      '& [class^="itemHover"]': {
        transition: '0.3s ease',
        opacity: 1
      }
    }), _item),
    innerWrap: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    itemHover: {
      opacity: 0,
      transition: '0.3s ease',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        backgroundImage: theme.gradients.secondary,
        opacity: 0.8,
        zIndex: -1
      }
    },
    itemHoverText: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      color: theme.colors.white.string(),
      cursor: 'pointer',
      '& img': {
        backgroundColor: theme.colors.white.string(),
        padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8),
        borderRadius: '30px',
        marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
      }
    },
    captionStyle: {
      position: 'absolute',
      bottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
      zIndex: 2
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/domain/use-styles.js":
/*!*********************************************!*\
  !*** ./src/pages/home/domain/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    domain: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    headerOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }, theme.media.sm_, {
      margin: 0
    }),
    descriptionOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    }),
    sectorList: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      '& > div:last-child': {
        margin: 0
      }
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/form/index.js":
/*!**************************************!*\
  !*** ./src/pages/home/form/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/form/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/form/index.js";





function ContactForm(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.mainForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/home/form/use-styles.js":
/*!*******************************************!*\
  !*** ./src/pages/home/form/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    mainForm: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }, theme.media.sm_, {
      marginTop: 0
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top */ "./src/pages/home/top/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/pages/home/services/index.js");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numbers */ "./src/pages/home/numbers/index.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain */ "./src/pages/home/domain/index.js");
/* harmony import */ var _technology__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technology */ "./src/pages/home/technology/index.js");
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients */ "./src/pages/home/clients/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects */ "./src/pages/home/projects/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form */ "./src/pages/home/form/index.js");
/* harmony import */ var actions_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/home */ "./src/actions/home.js");
/* harmony import */ var actions_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/domain */ "./src/actions/domain.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");
/* harmony import */ var actions_tech__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! actions/tech */ "./src/actions/tech.js");
/* harmony import */ var actions_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! actions/client */ "./src/actions/client.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/index.js";
















function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var fetchHomeInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(actions_home__WEBPACK_IMPORTED_MODULE_10__["getHomeInfo"])());
    dispatch(Object(actions_tech__WEBPACK_IMPORTED_MODULE_13__["getTechMains"])());
    dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_12__["getTeamCount"])());
    dispatch(Object(actions_domain__WEBPACK_IMPORTED_MODULE_11__["getDomainAll"])());
    dispatch(Object(actions_client__WEBPACK_IMPORTED_MODULE_14__["getClientAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchHomeInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_numbers__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_technology__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_clients__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/home/numbers/index.js":
/*!*****************************************!*\
  !*** ./src/pages/home/numbers/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Numbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ "./src/pages/home/numbers/item/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/numbers/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/numbers/index.js";






function Numbers() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  });
  var teamCounter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamCounter;
  });
  var items = [{
    number: payload.years,
    description: payload.yearsText,
    url: '/about',
    id: 0
  }, {
    number: payload.projectCount,
    description: payload.projectsText,
    url: '/projects',
    id: 1
  }, {
    number: teamCounter.count,
    description: payload.peoplesText,
    url: '/team',
    id: 2
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.numbers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    className: styles.headerOffest,
    title: "TGA Numbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.numbersList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      number: item.number,
      description: item.description,
      link: 'Learn more',
      url: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    });
  }))));
}

/***/ }),

/***/ "./src/pages/home/numbers/item/index.js":
/*!**********************************************!*\
  !*** ./src/pages/home/numbers/item/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/numbers/item/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/numbers/item/index.js";




function NumberItem(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, props.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Description1"], {
    className: styles.description,
    title: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_1__["CustomLink"], {
    title: props.link,
    url: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/home/numbers/item/use-styles.js":
/*!***************************************************!*\
  !*** ./src/pages/home/numbers/item/use-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    item: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flex: '1 0 50%',
      textAlign: 'center'
    }, theme.media.sm_, {
      textAlign: 'unset',
      flex: '1 0 33.333333%'
    }),
    number: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      fontFamily: 'RedHatFontBold'
    }, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(96),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(96)
    }),
    description: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(180),
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), 0]
    }, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(25), 0]
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/numbers/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/home/numbers/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    numbers: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72), 0, 0, 0]
    }, theme.media.sm_, {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140), 0]
    }),
    numbersList: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexWrap: 'wrap',
      '& > div:last-child': {
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
      }
    }, theme.media.sm_, {
      '& > div:last-child': {
        marginTop: 0
      }
    }),
    headerOffest: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(23)
    }, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/projects/index.js":
/*!******************************************!*\
  !*** ./src/pages/home/projects/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/project */ "./src/components/project/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/projects/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/projects/index.js";







function Projects() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectAll;
  }),
      projects = _useSelector.projects;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    className: styles.topHeader,
    title: "Clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, projects.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item._id,
      title: item.project,
      description: item.description,
      sector: item.sector.name,
      type: item.type,
      client: item.client.name,
      stack: item.technologies,
      url: item.imageKeys.main,
      path: item.slug,
      logo: item.client.logoKey,
      team: item.team,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottomLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["CustomLink"], {
    title: "Show all projects",
    url: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }))));
}

/***/ }),

/***/ "./src/pages/home/projects/use-styles.js":
/*!***********************************************!*\
  !*** ./src/pages/home/projects/use-styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _projectList;

  return {
    projects: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72), 0, 0, 0]
    }, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)]
    }),
    projectList: (_projectList = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), 0, 0]
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), 0, 0]
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, '& > div', {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, '& > div:last-child', {
      marginBottom: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, theme.media.sm_, {
      '& > div': {
        marginBottom: 0
      }
    }), _projectList),
    bottomLink: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/services/index.js":
/*!******************************************!*\
  !*** ./src/pages/home/services/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/services/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item */ "./src/pages/home/services/item/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/services/index.js";






function Services() {
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  });
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "services",
    className: styles.services,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Services we provide",
    className: styles.headerOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.servicesList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, payload.services.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item._id,
      title: item.heading,
      description: item.info,
      link: 'Explore our service',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    });
  }))));
}

/***/ }),

/***/ "./src/pages/home/services/item/index.js":
/*!***********************************************!*\
  !*** ./src/pages/home/services/item/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/services/item/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/services/item/index.js";




function ServiceItem(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header4"], {
    title: props.title,
    className: styles.headerOffest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Description6"], {
    title: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.itemHover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.itemBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_3__["CustomLink"], {
    title: props.link,
    white: true,
    url: "/#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }))));
}

/***/ }),

/***/ "./src/pages/home/services/item/use-styles.js":
/*!****************************************************!*\
  !*** ./src/pages/home/services/item/use-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _item;

  return {
    item: (_item = {
      flex: '1 0 100%',
      borderLeft: "1px solid ".concat(theme.colors.navyBlue.string()),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)],
      position: 'relative',
      '&:first-child': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        borderLeftColor: theme.colors.navyBlue.string()
      }, theme.media.md_, {
        borderLeftColor: 'transparent'
      })
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.sm_, {
      flex: '1 0 34%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.md_, {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)],
      flex: '1 0 21%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, '&:hover', {
      '& [class^="itemHover"]': {
        opacity: 1,
        transition: '0.3s ease'
      },
      '& + div': {
        borderLeftColor: 'transparent'
      },
      '& [class^="description6"], [class^="header4"]': {
        position: 'relative',
        zIndex: 1,
        color: 'white'
      }
    }), _item),
    smallHeader: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    },
    itemHover: {
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: theme.gradients.secondary,
      paddingBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32),
      transition: '0.3s ease',
      zIndex: 0
    },
    itemBottom: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      '& [class^="link"]': {
        top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
      }
    },
    headerOffest: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/services/use-styles.js":
/*!***********************************************!*\
  !*** ./src/pages/home/services/use-styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    services: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: 0
    }, theme.media.lg_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(130)
    }),
    servicesList: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    headerOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/technology/index.js":
/*!********************************************!*\
  !*** ./src/pages/home/technology/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Technology; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/technology/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/technology/index.js";






function Technology() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TechMains;
  }),
      technologies = _useSelector.technologies;

  var tabs = [{
    title: 'Front-End',
    tech: technologies.FE,
    link: 'Learn more',
    id: 0
  }, {
    title: 'Back End',
    tech: technologies.BE,
    link: 'Learn more',
    id: 1
  }, {
    title: 'Other technologies',
    tech: technologies.other,
    link: 'Learn more',
    id: 2
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.tech,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Technology stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Description1"], {
    className: styles.descriptionOffset,
    title: "Main technologies we use, but always expanding our stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: tabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/home/technology/use-styles.js":
/*!*************************************************!*\
  !*** ./src/pages/home/technology/use-styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    tech: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80), 0, 0, 0]
    }, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140), 0, 0, 0]
    }),
    descriptionOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    })
  };
}));

/***/ }),

/***/ "./src/pages/home/top/index.js":
/*!*************************************!*\
  !*** ./src/pages/home/top/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/top/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/top/index.js";







function Top() {
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  });
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();

  var scrollDown = function scrollDown() {
    var target = document.getElementById('services');
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  var isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__["tabletSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.top,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header1"], {
    className: styles.topHeader,
    title: payload.slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.topDescription,
    title: payload.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Discover more",
    dark: isTabletOrMobile,
    className: styles.customButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottom,
    onClick: scrollDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-down.svg */ "./src/assets/icons/arrow-down.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/home/top/main-bg.svg":
/*!****************************************!*\
  !*** ./src/pages/home/top/main-bg.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/main-bg.2fec8690.svg";

/***/ }),

/***/ "./src/pages/home/top/use-styles.js":
/*!******************************************!*\
  !*** ./src/pages/home/top/use-styles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _bottom;

  return {
    top: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: 'calc(100vh - 59px)',
      backgroundSize: 'cover',
      backgroundImage: "url(".concat(__webpack_require__(/*! ./main-bg.svg */ "./src/pages/home/top/main-bg.svg"), ")"),
      backgroundPosition: 'center',
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)]
    }, theme.media.sm_, {
      justifyContent: 'center',
      padding: 0,
      height: 'calc(100vh - 73px)'
    }),
    topHeader: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      textAlign: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(810)
    }, theme.media.sm_, {
      marginTop: 0
    }),
    topDescription: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      textAlign: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(43),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(500)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
    }),
    action: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45),
      width: '100%'
    }, theme.media.sm_, {
      width: 'unset',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }),
    customButton: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%'
    }, theme.media.sm_, {
      width: 'auto'
    }),
    bottom: (_bottom = {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      position: 'relative',
      top: 0,
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(2)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, theme.media.sm_, {
      top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
      marginTop: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      padding: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, '& img', {
      width: '65%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, '&:after', {
      position: 'absolute',
      top: '50%',
      left: '50%',
      content: '""',
      width: '100%',
      height: '100%',
      border: "1px solid ".concat(theme.colors.black.string()),
      transform: "translate(-50%, -50%)",
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64)
    }), _bottom)
  };
}));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: home, about, projects, project, team, crewman, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "team", function() { return team; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crewman", function() { return crewman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var _create_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-route */ "./src/pages/create-route.js");

var home = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/',
  exact: true,
  component: __webpack_require__(/*! ./home */ "./src/pages/home/index.js")["default"]
});
var about = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/about',
  exact: true,
  component: __webpack_require__(/*! ./about */ "./src/pages/about/index.js")["default"]
});
var projects = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/projects',
  exact: true,
  component: __webpack_require__(/*! ./projects */ "./src/pages/projects/index.js")["default"]
});
var project = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/projects/:id',
  exact: true,
  component: __webpack_require__(/*! ./project */ "./src/pages/project/index.js")["default"]
});
var team = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/team',
  exact: true,
  component: __webpack_require__(/*! ./team */ "./src/pages/team/index.js")["default"]
});
var crewman = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/team/:id',
  exact: true,
  component: __webpack_require__(/*! ./crewman */ "./src/pages/crewman/index.js")["default"]
});
var join = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/join',
  exact: true,
  component: __webpack_require__(/*! ./join */ "./src/pages/join/index.js")["default"]
});

/***/ }),

/***/ "./src/pages/join/hiring/index.js":
/*!****************************************!*\
  !*** ./src/pages/join/hiring/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/hiring/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/hiring/index.js";






function HiringProcess() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.JoinInfo;
  }),
      data = _useSelector.data;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.hiringWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Our hiring process",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.process,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, data.hiringProcess.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.processStep,
      key: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.counter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, item.step), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, item.title));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HiringProcess);

/***/ }),

/***/ "./src/pages/join/hiring/use-styles.js":
/*!*********************************************!*\
  !*** ./src/pages/join/hiring/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _hiringWrap, _process, _after;

  return {
    hiringWrap: (_hiringWrap = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(75)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_hiringWrap, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_hiringWrap, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _hiringWrap),
    process: (_process = {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_process, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_process, theme.media.md_, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(160),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_process, theme.media.lg_, {
      flexWrap: 'no-wrap'
    }), _process),
    processStep: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(175),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      position: 'relative',
      '&:after': (_after = {
        content: '""',
        backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-dashed.svg */ "./src/assets/icons/arrow-dashed.svg"), ")"),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(56),
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, theme.media.md_, {
        content: 'none'
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, '@media (min-width: 1440px)', {
        content: '""',
        transform: 'rotate(-90deg)',
        position: 'absolute',
        top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
        left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(190)
      }), _after),
      '&:nth-child(1)': {
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(0),
        '& $icon': {
          '&:after': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
            bottom: 0,
            transform: 'rotate(3deg)'
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
            top: '-19px',
            transform: 'rotate(-47deg)'
          }
        }
      },
      '&:nth-child(2)': {
        '& $icon': {
          '&:after': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
            bottom: '-33px',
            transform: 'rotate(61deg)'
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
            top: '-31px',
            transform: 'rotate(-48deg)'
          }
        }
      },
      '&:nth-child(3)': {
        '& $icon': {
          '&:after': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
            top: 0,
            left: '-16px',
            transform: 'rotate(126deg)'
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
            top: '-27px',
            transform: 'rotate(-47deg)'
          }
        }
      },
      '&:nth-child(4)': {
        '& $icon': {
          '&:after': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
            top: '-55px',
            left: '38px',
            transform: 'rotate(-46deg)'
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
            left: '-83px',
            top: '-23px',
            transform: 'rotate(8deg)'
          }
        }
      },
      '&:nth-child(5)': {
        '& $icon': {
          '&:after': {
            content: '""',
            width: 0,
            height: 0,
            borderLeft: ['60px', 'solid', 'transparent'],
            borderRight: ['60px', 'solid', 'transparent'],
            borderTop: ['90px', 'solid', theme.colors.white.string()],
            backgroundColor: 'transparent !important',
            top: '-31px',
            left: '35px',
            transform: 'rotate(8deg)'
          }
        }
      },
      '&:nth-last-child(1)': {
        '&:after': {
          content: 'none'
        }
      }
    }, theme.media.md_, {
      marginTop: 0
    }),
    icon: {
      backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/tga-icon.svg */ "./src/assets/icons/tga-icon.svg"), ")"),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '14px',
      backgroundSize: '100% 100%',
      width: '100%',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(120),
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      '&:after, &:before': {
        position: 'absolute',
        backgroundColor: theme.colors.white.string()
      }
    },
    counter: {
      backgroundColor: theme.colors.primary.string(),
      color: theme.colors.white.string(),
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontFamily: 'RedHatFontBold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100%',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10), 0]
    },
    name: {
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(22),
      whiteSpace: 'pre-wrap',
      textAlign: 'center',
      color: theme.colors.darkGray.string()
    }
  };
}));

/***/ }),

/***/ "./src/pages/join/index.js":
/*!*********************************!*\
  !*** ./src/pages/join/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _reasons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reasons */ "./src/pages/join/reasons/index.js");
/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positions */ "./src/pages/join/positions/index.js");
/* harmony import */ var _hiring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hiring */ "./src/pages/join/hiring/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/use-styles.js");
/* harmony import */ var actions_join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/join */ "./src/actions/join.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/index.js";











function JoinUs() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var fetchJoinInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(actions_join__WEBPACK_IMPORTED_MODULE_9__["getJoinInfo"])());
  }, [dispatch]);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchJoinInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.joinUs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reasons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_positions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hiring__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (JoinUs);

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/join/positions/index.js":
/*!*******************************************!*\
  !*** ./src/pages/join/positions/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/positions/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/positions/index.js";







function Positions() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.JoinInfo;
  }),
      data = _useSelector.data;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.positionsWrap,
    id: "positions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Open positions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.positions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, data.openPositions.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_4__["InfoCard"], {
      key: item._id,
      title: item.name,
      requirements: item.requirements,
      link: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 8
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Positions);

/***/ }),

/***/ "./src/pages/join/positions/use-styles.js":
/*!************************************************!*\
  !*** ./src/pages/join/positions/use-styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _positionsWrap, _positions;

  return {
    positionsWrap: (_positionsWrap = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_positionsWrap, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(90)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_positionsWrap, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _positionsWrap),
    positions: (_positions = {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      flexDirection: 'column'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_positions, theme.media.sm_, {
      flexDirection: 'row'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_positions, theme.media.md_, {
      justifyContent: 'space-between'
    }), _positions)
  };
}));

/***/ }),

/***/ "./src/pages/join/reasons/index.js":
/*!*****************************************!*\
  !*** ./src/pages/join/reasons/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/reasons/use-styles.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./src/pages/join/reasons/item/index.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/reasons/index.js";







function Reasons() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.JoinInfo;
  }),
      data = _useSelector.data;

  var reasons = data.reasons.map(function (item, index) {
    return {
      icon: index,
      title: item.heading,
      description: item.info,
      id: item._id
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.reasonsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "5 reasons to join TGA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.reasons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, reasons.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: item.id
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Reasons);

/***/ }),

/***/ "./src/pages/join/reasons/item/index.js":
/*!**********************************************!*\
  !*** ./src/pages/join/reasons/item/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/reasons/item/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/reasons/item/index.js";




function Reason(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.reason,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$")("./reasons-icon-".concat(icon, ".svg")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.infoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Header3"], {
    title: title,
    className: styles.customHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Description3"], {
    title: description,
    className: styles.customDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Reason);

/***/ }),

/***/ "./src/pages/join/reasons/item/use-styles.js":
/*!***************************************************!*\
  !*** ./src/pages/join/reasons/item/use-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    reason: {
      '& img': {
        maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
      }
    },
    customHeader: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    },
    infoWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)
    }, theme.media.sm_, {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(270)
    }),
    customDesc: {
      whiteSpace: 'pre-wrap'
    }
  };
}));

/***/ }),

/***/ "./src/pages/join/reasons/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/join/reasons/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _reasons;

  return {
    reasonsWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    reasons: (_reasons = {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28),
      justifyContent: 'center'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_reasons, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_reasons, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_reasons, '& > div', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%'
    }, theme.media.sm_, {
      width: 'auto',
      padding: '0 5%'
    })), _reasons)
  };
}));

/***/ }),

/***/ "./src/pages/join/use-styles.js":
/*!**************************************!*\
  !*** ./src/pages/join/use-styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    joinUs: {},
    contacts: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    })
  };
}));

/***/ }),

/***/ "./src/pages/project/blog/index.js":
/*!*****************************************!*\
  !*** ./src/pages/project/blog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row */ "./src/pages/project/blog/row/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api */ "./src/api/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/blog/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/blog/index.js";







function Blog() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Project;
  }),
      project = _useSelector.project;

  var imageKeys = project.imageKeys;
  var firstImg = "".concat(api__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "/image/").concat(imageKeys && imageKeys.main);
  var secondImg = "".concat(api__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "/image/").concat(imageKeys && imageKeys.second);
  var imgArr = [firstImg, secondImg];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.blogWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, project.texts && project.texts.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item,
      image: imgArr[index],
      key: "blog-row-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 8
      }
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/pages/project/blog/row/index.js":
/*!*********************************************!*\
  !*** ./src/pages/project/blog/row/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/blog/row/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/blog/row/index.js";





function BlogRow(_ref) {
  var title = _ref.title,
      image = _ref.image;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.blogRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.blogBlock, styles.text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Description1"], {
    className: styles.customText,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.blogBlock, styles.image),
    style: {
      backgroundImage: "url(".concat(image, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlogRow);

/***/ }),

/***/ "./src/pages/project/blog/row/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/project/blog/row/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    blogRow: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexDirection: 'column-reverse',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      '&:nth-of-type(even)': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(41)
      }, theme.media.sm_, {
        flexDirection: 'row-reverse'
      })
    }, theme.media.sm_, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    blogBlock: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flex: '50%',
      maxHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(300),
      height: '100%',
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%'
      }
    }, theme.media.sm_, {
      maxHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(630)
    }),
    text: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      justifyContent: 'center',
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }, theme.media.sm_, {
      alignItems: 'center',
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)]
    }),
    customText: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(540),
      whiteSpace: 'pre-wrap'
    }, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
    }),
    image: {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };
}));

/***/ }),

/***/ "./src/pages/project/blog/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/project/blog/use-styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    blogWrap: {}
  };
}));

/***/ }),

/***/ "./src/pages/project/carousel/index.js":
/*!*********************************************!*\
  !*** ./src/pages/project/carousel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/carousel/use-styles.js");
/* harmony import */ var components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/carousel */ "./src/components/carousel/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/carousel/index.js";










var CrewCarousel = function CrewCarousel() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["tabletSize"]); //todo - uncomment line 24 when we will have enough projects amount

  var slidesToShow = isTabletOrMobile ? 1 : 4;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectAll;
  }),
      projects = _useSelector.projects;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.crewCarousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_7__["Header1"], {
    title: "Other projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_carousel__WEBPACK_IMPORTED_MODULE_5__["default"] // slidesToShow={slidesToShow}
  , {
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    className: styles.customCarousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, projects.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_8__["ProjectCard"], {
      key: item._id,
      description: item.title,
      icon: item.client.logoKey,
      image: item.imageKeys.main,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 8
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CrewCarousel);

/***/ }),

/***/ "./src/pages/project/carousel/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/project/carousel/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _crewCarousel, _button;

  return {
    crewCarousel: (_crewCarousel = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(42)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_crewCarousel, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(110)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_crewCarousel, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(180)
    }), _crewCarousel),
    customCarousel: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      maxHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(500),
      '& .slick-slider': {
        '& button': (_button = {
          backgroundColor: theme.colors.white.string(),
          top: 'calc(50% - 50px)'
        }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_button, theme.media.sm_, {
          display: 'none'
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_button, theme.media.md_, {
          display: 'flex'
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_button, '&:first-child', {
          left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_button, '&:last-child', {
          right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }), _button),
        '& .slick-slide': {
          margin: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }
      }
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    })
  };
}));

/***/ }),

/***/ "./src/pages/project/index.js":
/*!************************************!*\
  !*** ./src/pages/project/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/use-styles.js");
/* harmony import */ var _information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information */ "./src/pages/project/information/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider */ "./src/pages/project/slider/index.js");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog */ "./src/pages/project/blog/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel */ "./src/pages/project/carousel/index.js");
/* harmony import */ var actions_project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/project */ "./src/actions/project.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/index.js";











function Project(_ref) {
  var match = _ref.match;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var projectId = match.url.split('/')[2];
  var fetchProject = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(actions_project__WEBPACK_IMPORTED_MODULE_10__["getProject"])(projectId));
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchProject();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.projectPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/project/information/index.js":
/*!************************************************!*\
  !*** ./src/pages/project/information/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_specification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/specification */ "./src/components/specification/index.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/information/index.js";




function Information() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Project;
  }),
      project = _useSelector.project;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_specification__WEBPACK_IMPORTED_MODULE_3__["SpecificationProject"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, project, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ }),

/***/ "./src/pages/project/slider/index.js":
/*!*******************************************!*\
  !*** ./src/pages/project/slider/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/slider/use-styles.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/carousel */ "./src/components/carousel/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./src/pages/project/slider/item/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/slider/index.js";









function TopSlider() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_2__["mobileSize"]);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.Project;
  }),
      project = _useSelector.project;

  var imageKeys = project.imageKeys;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    dots: isMobile,
    className: styles.customCarousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, imageKeys && imageKeys.other.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "carousel-".concat(index),
      image: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TopSlider);

/***/ }),

/***/ "./src/pages/project/slider/item/index.js":
/*!************************************************!*\
  !*** ./src/pages/project/slider/item/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/api/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/project/slider/item/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/project/slider/item/index.js";




function SliderItem(_ref) {
  var image = _ref.image;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var img = "".concat(api__WEBPACK_IMPORTED_MODULE_1__["baseURL"], "/image/").concat(image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.item,
    style: {
      backgroundImage: "url(".concat(img, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SliderItem);

/***/ }),

/***/ "./src/pages/project/slider/item/use-styles.js":
/*!*****************************************************!*\
  !*** ./src/pages/project/slider/item/use-styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _item;

  return {
    item: (_item = {
      backgroundSize: 'cover',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(170)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.sm_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(400)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.md_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(680)
    }), _item)
  };
}));

/***/ }),

/***/ "./src/pages/project/slider/use-styles.js":
/*!************************************************!*\
  !*** ./src/pages/project/slider/use-styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    customCarousel: {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(40),
      '& .slick-slider': {
        '& button': {
          backgroundColor: theme.colors.white.string(),
          top: 'calc(50%)',
          '&:first-child': {
            left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(20)
          },
          '&:last-child': {
            right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(20)
          }
        }
      }
    }
  };
}));

/***/ }),

/***/ "./src/pages/project/use-styles.js":
/*!*****************************************!*\
  !*** ./src/pages/project/use-styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _contacts;

  return {
    projectPage: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), 0, 0, 0]
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    contacts: (_contacts = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(84)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(110)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _contacts)
  };
}));

/***/ }),

/***/ "./src/pages/projects/filters/index.js":
/*!*********************************************!*\
  !*** ./src/pages/projects/filters/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/filters */ "./src/components/filters/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-styles */ "./src/pages/projects/filters/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/projects/filters/index.js";








function ProjectFilters(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isMobile = _useState4[0],
      setIsMobile = _useState4[1];

  var isMobileQuery = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["mobileSize"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  var onClick = function onClick() {
    return active ? setActive(false) : setActive(true);
  };

  var technologies = ['Python', 'Wordpress', 'React', '.Net', 'Episerver', 'React Native', 'AWS', 'Html, CSS', 'JS', 'Ruby', 'PHP'];
  var domain = ['Sport', 'Leisure & Media', 'Agency', 'Recruitment', 'Healthcare'];
  var type = ['Mobile', 'Web', 'Desktop'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: styles.filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    title: "Clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.filtersList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.filtersHeader,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Filter", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/chevron.svg */ "./src/assets/icons/chevron.svg"),
    style: {
      rotate: '180deg'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  })), active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.overlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.filtersList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.filtersHeader,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  }, "Filter", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/chevron.svg */ "./src/assets/icons/chevron.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Technologies",
    data: technologies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Domain",
    data: domain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Type",
    data: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 10
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.filtersList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Technologies",
    data: technologies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Domain",
    data: domain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Type",
    data: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectFilters);

/***/ }),

/***/ "./src/pages/projects/filters/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/projects/filters/use-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    filters: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    filtersList: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 5,
      width: '100%',
      backgroundColor: 'white',
      paddingLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      borderRadius: '16px 16px 0 0',
      '& div:nth-of-type(2)': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
      }, theme.media.sm_, {
        paddingTop: 0
      }),
      '& div:nth-of-type(1)': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.media.sm_, {
        paddingTop: 0
      })
    }, theme.media.sm_, {
      position: 'static',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      paddingLeft: 0
    }),
    filtersHeader: {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(56),
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      '& img': {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(11),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(7),
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(7),
        marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(25)
      }
    },
    overlay: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 5
    }
  };
}));

/***/ }),

/***/ "./src/pages/projects/index.js":
/*!*************************************!*\
  !*** ./src/pages/projects/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./works */ "./src/pages/projects/works/index.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./src/pages/projects/filters/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/pages/projects/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/projects/index.js";








function Projects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/pages/projects/use-styles.js":
/*!******************************************!*\
  !*** ./src/pages/projects/use-styles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _contacts;

  return {
    contacts: (_contacts = {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(120)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_contacts, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }), _contacts)
  };
}));

/***/ }),

/***/ "./src/pages/projects/works/index.js":
/*!*******************************************!*\
  !*** ./src/pages/projects/works/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/project */ "./src/components/project/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/projects/works/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/projects/works/index.js";






function Works() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectAll;
  }),
      projects = _useSelector.projects;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectsList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, projects.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item._id,
      title: item.title,
      description: item.description,
      client: item.client.name,
      sector: item.sector.name,
      type: item.type,
      stack: item.technologies,
      team: item.team,
      path: item.slug,
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./src/pages/projects/works/use-styles.js":
/*!************************************************!*\
  !*** ./src/pages/projects/works/use-styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    projects: {//	margin: [size(240), 0, size(128)],
    },
    projectsList: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(40), 0, 0]
    }
  };
}));

/***/ }),

/***/ "./src/pages/team/index.js":
/*!*********************************!*\
  !*** ./src/pages/team/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-styles */ "./src/pages/team/use-styles.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/team/index.js";










function Team() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamAll;
  }),
      team = _useSelector.team;

  var fetchTeamAll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_8__["getTeamAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchTeamAll();
  }, []);
  var main = ['paul_chudleigh', 'michael_sastry'];
  var bosses = team.filter(function (item) {
    return main.includes(item.slug);
  });
  var employees = team.filter(function (item) {
    return !main.includes(item.slug);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.teamPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.topWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_6__["Header2"], {
    className: styles.topHeader,
    title: "Our team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_2__["CustomHashLink"], {
    url: '/join#positions',
    className: styles.customLink,
    title: "Join Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.topRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, bosses && bosses.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_4__["CrewCard"], {
      key: item._id,
      name: item.name,
      bio: item.roles,
      url: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.teamWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, employees && employees.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_4__["CrewCard"], {
      key: item._id,
      name: item.name,
      bio: item.roles,
      photos: [item.imageKeys.professional, item.imageKeys.smiley],
      url: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_6__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./src/pages/team/use-styles.js":
/*!**************************************!*\
  !*** ./src/pages/team/use-styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _topRow, _teamWrap;

  return {
    topWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexDirection: 'column',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64), 0],
      '& > button': {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(296),
        alignSelf: 'center'
      }
    }, theme.media.md_, {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(128), 0],
      '& > button': {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(138),
        alignSelf: 'flex-start',
        padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)]
      }
    }),
    topHeader: {
      marginBottom: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)]
    },
    topRow: (_topRow = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div': {
        marginRight: 0,
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38)
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_topRow, theme.media.md_, {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_topRow, theme.media.lg_, {
      flexDirection: 'row',
      justifyContent: 'center',
      '& > div': {
        marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
        '&:last-child': {
          marginRight: 0
        }
      }
    }), _topRow),
    teamWrap: (_teamWrap = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      '& > div': {
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38)
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_teamWrap, theme.media.sm_, {
      justifyContent: 'space-around'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_teamWrap, theme.media.lg_, {
      '& > div': {
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
        '&:nth-last-child(-n+4)': {
          marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100)
        }
      }
    }), _teamWrap),
    contacts: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, theme.media.lg_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140)
    }),
    customLink: {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(138),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(56),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)]
    }
  };
}));

/***/ }),

/***/ "./src/reducers/about.js":
/*!*******************************!*\
  !*** ./src/reducers/about.js ***!
  \*******************************/
/*! exports provided: AboutInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInfo", function() { return AboutInfo; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var AboutInfo = function AboutInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: {
      help: [],
      visions: [],
      timeLine: []
    },
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_ABOUT_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_ABOUT_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        data: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_ABOUT_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AboutInfo);

/***/ }),

/***/ "./src/reducers/client.js":
/*!********************************!*\
  !*** ./src/reducers/client.js ***!
  \********************************/
/*! exports provided: ClientAll, ClientList, ClientMains, ClientProject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAll", function() { return ClientAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientList", function() { return ClientList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMains", function() { return ClientMains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProject", function() { return ClientProject; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var ClientAll = function ClientAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    clients: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CLIENT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_CLIENT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        clients: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_CLIENT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var ClientList = function ClientList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CLIENT_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_CLIENT_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_CLIENT_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var ClientMains = function ClientMains() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CLIENT_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_CLIENT_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_CLIENT_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var ClientProject = function ClientProject() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    clientProject: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CLIENT_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_CLIENT_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        clientProject: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_CLIENT_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  ClientAll: ClientAll,
  ClientList: ClientList,
  ClientMains: ClientMains,
  ClientProject: ClientProject
});

/***/ }),

/***/ "./src/reducers/domain.js":
/*!********************************!*\
  !*** ./src/reducers/domain.js ***!
  \********************************/
/*! exports provided: DomainList, DomainAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainList", function() { return DomainList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainAll", function() { return DomainAll; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  domains: []
};
var DomainList = function DomainList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false
      }, action.data);

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var DomainAll = function DomainAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DOMAIN_ALL"]:
      return _objectSpread({}, state);

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_DOMAIN_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        domains: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_DOMAIN_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/home.js":
/*!******************************!*\
  !*** ./src/reducers/home.js ***!
  \******************************/
/*! exports provided: HomeInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInfo", function() { return HomeInfo; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
  clientsFieldDescription: '',
  description: '',
  peoplesText: '',
  projectCount: 0,
  projectsText: '',
  sectorFieldDescription: '',
  sectorFieldName: '',
  services: [],
  slogan: '',
  years: 0,
  yearsText: '',
  _id: 0
}, "services", []);

var HomeInfo = function HomeInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false
      }, action.data);

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/reducers/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/reducers/home.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join */ "./src/reducers/join.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./src/reducers/team.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client */ "./src/reducers/client.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain */ "./src/reducers/domain.js");
/* harmony import */ var _tech__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tech */ "./src/reducers/tech.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project */ "./src/reducers/project.js");









var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  AboutInfo: _about__WEBPACK_IMPORTED_MODULE_1__["default"],
  HomeInfo: _home__WEBPACK_IMPORTED_MODULE_2__["default"],
  TeamCounter: _team__WEBPACK_IMPORTED_MODULE_4__["TeamCounter"],
  ClientAll: _client__WEBPACK_IMPORTED_MODULE_5__["ClientAll"],
  ClientProject: _client__WEBPACK_IMPORTED_MODULE_5__["ClientProject"],
  TeamAll: _team__WEBPACK_IMPORTED_MODULE_4__["TeamAll"],
  DomainAll: _domain__WEBPACK_IMPORTED_MODULE_6__["DomainAll"],
  JoinInfo: _join__WEBPACK_IMPORTED_MODULE_3__["default"],
  TechMains: _tech__WEBPACK_IMPORTED_MODULE_7__["TechMains"],
  TeamMember: _team__WEBPACK_IMPORTED_MODULE_4__["TeamMember"],
  ProjectAll: _project__WEBPACK_IMPORTED_MODULE_8__["ProjectAll"],
  ProjectMember: _project__WEBPACK_IMPORTED_MODULE_8__["ProjectMember"],
  Project: _project__WEBPACK_IMPORTED_MODULE_8__["Project"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/join.js":
/*!******************************!*\
  !*** ./src/reducers/join.js ***!
  \******************************/
/*! exports provided: JoinInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinInfo", function() { return JoinInfo; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var JoinInfo = function JoinInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: {
      hiringProcess: [],
      openPositions: [],
      reasons: []
    },
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_JOIN_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_JOIN_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        data: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_JOIN_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (JoinInfo);

/***/ }),

/***/ "./src/reducers/project.js":
/*!*********************************!*\
  !*** ./src/reducers/project.js ***!
  \*********************************/
/*! exports provided: ProjectAll, ProjectMember, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAll", function() { return ProjectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMember", function() { return ProjectMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var ProjectAll = function ProjectAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    projects: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PROJECT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_PROJECT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        projects: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_PROJECT_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var ProjectMember = function ProjectMember() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    projectMember: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PROJECT_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_PROJECT_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        projectMember: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_PROJECT_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var Project = function Project() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    project: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        project: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_PROJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/team.js":
/*!******************************!*\
  !*** ./src/reducers/team.js ***!
  \******************************/
/*! exports provided: TeamList, TeamAll, TeamCounter, TeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return TeamList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAll", function() { return TeamAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCounter", function() { return TeamCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return TeamMember; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var TeamList = function TeamList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamAll = function TeamAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    team: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        team: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamCounter = function TeamCounter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 0,
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        count: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamMember = function TeamMember() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    member: [],
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        member: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/tech.js":
/*!******************************!*\
  !*** ./src/reducers/tech.js ***!
  \******************************/
/*! exports provided: TechList, TechMains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechList", function() { return TechList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechMains", function() { return TechMains; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var TechList = function TechList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TechMains = function TechMains() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    technologies: {
      FE: [],
      BE: [],
      other: []
    },
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TECH_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TECH_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        technologies: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TECH_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-preset-default */ "jss-preset-default");
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jss_preset_default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_jss_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/jss/theme */ "./src/config/jss/theme.js");
/* harmony import */ var _config_jss_default_unit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/jss/default-unit */ "./src/config/jss/default-unit.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/server.js";












jss__WEBPACK_IMPORTED_MODULE_6___default.a.setup(jss_preset_default__WEBPACK_IMPORTED_MODULE_7___default()({
  defaultUnit: _config_jss_default_unit__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_3___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]("/Users/ainkhm/Desktop/tga-app/public")).get('/*', function (req, res) {
  var context = {};
  var store = Object(_store__WEBPACK_IMPORTED_MODULE_11__["default"])({
    test: 'sdfds'
  });
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.url,
    context: context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_8__["JssProvider"], {
    jss: jss__WEBPACK_IMPORTED_MODULE_6___default.a,
    registry: sheets,
    generateId: generateId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _config_jss_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }))))));
  var sheets = new react_jss__WEBPACK_IMPORTED_MODULE_8__["SheetsRegistry"]();
  var generateId = Object(react_jss__WEBPACK_IMPORTED_MODULE_8__["createGenerateId"])();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n                    <html lang=\"en\">\n                    <head>\n                        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n                        <meta charset=\"utf-8\" />\n                        <title>TGA - website</title>\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\n                        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"".concat(undefined || '/', "apple-touch-icon.png\">\n                        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"").concat(undefined || '/', "favicon-32x32.png\">\n                        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"").concat(undefined || '/', "favicon-16x16.png\">\n                        <link rel=\"manifest\" href=\"").concat(undefined || '', "/site.webmanifest\">\n                        <style type=\"text/css\">").concat(sheets.toString(), "</style>\n                        ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n                        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n                    </head>\n                    <body>\n                        <div id=\"root\">").concat(markup, "</div>\n                    </body>\n                </html>"));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: isServer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");





var isServer = true;
var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])();

var configureStore = function configureStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, loggerMiddleware)));

  if (true) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(/*! ../reducers */ "./src/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
(function () {
      var nextRootReducer = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js")["default"];

      store.replaceReducer(nextRootReducer);
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  }

  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/types/index.js":
/*!****************************!*\
  !*** ./src/types/index.js ***!
  \****************************/
/*! exports provided: FETCH_HOME_INFO, FINISHED_FETCH_HOME_INFO, ERROR_FETCH_HOME_INFO, FETCH_ABOUT_INFO, FINISHED_FETCH_ABOUT_INFO, ERROR_FETCH_ABOUT_INFO, FETCH_JOIN_INFO, FINISHED_FETCH_JOIN_INFO, ERROR_FETCH_JOIN_INFO, FETCH_TECH_LIST, FINISHED_FETCH_TECH_LIST, ERROR_FETCH_TECH_LIST, FETCH_TECH_MAINS, FINISHED_FETCH_TECH_MAINS, ERROR_FETCH_TECH_MAINS, FETCH_TEAM_LIST, FINISHED_FETCH_TEAM_LIST, ERROR_FETCH_TEAM_LIST, FETCH_TEAM_ALL, FINISHED_FETCH_TEAM_ALL, ERROR_FETCH_TEAM_ALL, FETCH_TEAM_COUNT, FINISHED_FETCH_TEAM_COUNT, ERROR_FETCH_TEAM_COUNT, FETCH_TEAM_MEMBER, FINISHED_FETCH_TEAM_MEMBER, ERROR_FETCH_TEAM_MEMBER, FETCH_CLIENT_ALL, FINISHED_FETCH_CLIENT_ALL, ERROR_FETCH_CLIENT_ALL, FETCH_CLIENT_LIST, FINISHED_FETCH_CLIENT_LIST, ERROR_FETCH_CLIENT_LIST, FETCH_CLIENT_MAINS, FINISHED_FETCH_CLIENT_MAINS, ERROR_FETCH_CLIENT_MAINS, FETCH_CLIENT_PROJECT, FINISHED_FETCH_CLIENT_PROJECT, ERROR_FETCH_CLIENT_PROJECT, FETCH_PROJECT_ALL, FINISHED_FETCH_PROJECT_ALL, ERROR_FETCH_PROJECT_ALL, FETCH_PROJECT_MEMBER, FINISHED_FETCH_PROJECT_MEMBER, ERROR_FETCH_PROJECT_MEMBER, FETCH_PROJECT, FINISHED_FETCH_PROJECT, ERROR_FETCH_PROJECT, FETCH_DOMAIN_LIST, FINISHED_FETCH_DOMAIN_LIST, ERROR_FETCH_DOMAIN_LIST, FETCH_DOMAIN_ALL, FINISHED_FETCH_DOMAIN_ALL, ERROR_FETCH_DOMAIN_ALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_HOME_INFO", function() { return FETCH_HOME_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_HOME_INFO", function() { return FINISHED_FETCH_HOME_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_HOME_INFO", function() { return ERROR_FETCH_HOME_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ABOUT_INFO", function() { return FETCH_ABOUT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_ABOUT_INFO", function() { return FINISHED_FETCH_ABOUT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_ABOUT_INFO", function() { return ERROR_FETCH_ABOUT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_JOIN_INFO", function() { return FETCH_JOIN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_JOIN_INFO", function() { return FINISHED_FETCH_JOIN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_JOIN_INFO", function() { return ERROR_FETCH_JOIN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TECH_LIST", function() { return FETCH_TECH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TECH_LIST", function() { return FINISHED_FETCH_TECH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TECH_LIST", function() { return ERROR_FETCH_TECH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TECH_MAINS", function() { return FETCH_TECH_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TECH_MAINS", function() { return FINISHED_FETCH_TECH_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TECH_MAINS", function() { return ERROR_FETCH_TECH_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TEAM_LIST", function() { return FETCH_TEAM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TEAM_LIST", function() { return FINISHED_FETCH_TEAM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TEAM_LIST", function() { return ERROR_FETCH_TEAM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TEAM_ALL", function() { return FETCH_TEAM_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TEAM_ALL", function() { return FINISHED_FETCH_TEAM_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TEAM_ALL", function() { return ERROR_FETCH_TEAM_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TEAM_COUNT", function() { return FETCH_TEAM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TEAM_COUNT", function() { return FINISHED_FETCH_TEAM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TEAM_COUNT", function() { return ERROR_FETCH_TEAM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TEAM_MEMBER", function() { return FETCH_TEAM_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_TEAM_MEMBER", function() { return FINISHED_FETCH_TEAM_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_TEAM_MEMBER", function() { return ERROR_FETCH_TEAM_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENT_ALL", function() { return FETCH_CLIENT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_CLIENT_ALL", function() { return FINISHED_FETCH_CLIENT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_CLIENT_ALL", function() { return ERROR_FETCH_CLIENT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENT_LIST", function() { return FETCH_CLIENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_CLIENT_LIST", function() { return FINISHED_FETCH_CLIENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_CLIENT_LIST", function() { return ERROR_FETCH_CLIENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENT_MAINS", function() { return FETCH_CLIENT_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_CLIENT_MAINS", function() { return FINISHED_FETCH_CLIENT_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_CLIENT_MAINS", function() { return ERROR_FETCH_CLIENT_MAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENT_PROJECT", function() { return FETCH_CLIENT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_CLIENT_PROJECT", function() { return FINISHED_FETCH_CLIENT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_CLIENT_PROJECT", function() { return ERROR_FETCH_CLIENT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROJECT_ALL", function() { return FETCH_PROJECT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_PROJECT_ALL", function() { return FINISHED_FETCH_PROJECT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_PROJECT_ALL", function() { return ERROR_FETCH_PROJECT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROJECT_MEMBER", function() { return FETCH_PROJECT_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_PROJECT_MEMBER", function() { return FINISHED_FETCH_PROJECT_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_PROJECT_MEMBER", function() { return ERROR_FETCH_PROJECT_MEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROJECT", function() { return FETCH_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_PROJECT", function() { return FINISHED_FETCH_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_PROJECT", function() { return ERROR_FETCH_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DOMAIN_LIST", function() { return FETCH_DOMAIN_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_DOMAIN_LIST", function() { return FINISHED_FETCH_DOMAIN_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_DOMAIN_LIST", function() { return ERROR_FETCH_DOMAIN_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DOMAIN_ALL", function() { return FETCH_DOMAIN_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISHED_FETCH_DOMAIN_ALL", function() { return FINISHED_FETCH_DOMAIN_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FETCH_DOMAIN_ALL", function() { return ERROR_FETCH_DOMAIN_ALL; });
var FETCH_HOME_INFO = 'FETCH_HOME_INFO';
var FINISHED_FETCH_HOME_INFO = 'FINISHED_FETCH_HOME_INFO';
var ERROR_FETCH_HOME_INFO = 'ERROR_FETCH_HOME_INFO';
var FETCH_ABOUT_INFO = 'FETCH_ABOUT_INFO';
var FINISHED_FETCH_ABOUT_INFO = 'FINISHED_FETCH_ABOUT_INFO';
var ERROR_FETCH_ABOUT_INFO = 'ERROR_FETCH_ABOUT_INFO';
var FETCH_JOIN_INFO = 'FETCH_JOIN_INFO';
var FINISHED_FETCH_JOIN_INFO = 'FINISHED_FETCH_JOIN_INFO';
var ERROR_FETCH_JOIN_INFO = 'ERROR_FETCH_JOIN_INFO';
var FETCH_TECH_LIST = 'FETCH_TECH_LIST';
var FINISHED_FETCH_TECH_LIST = 'FINISHED_FETCH_TECH_LIST';
var ERROR_FETCH_TECH_LIST = 'ERROR_FETCH_TECH_LIST';
var FETCH_TECH_MAINS = 'FETCH_TECH_MAINS';
var FINISHED_FETCH_TECH_MAINS = 'FINISHED_FETCH_TECH_MAINS';
var ERROR_FETCH_TECH_MAINS = 'ERROR_FETCH_TECH_MAINS';
var FETCH_TEAM_LIST = 'FETCH_TEAM_LIST';
var FINISHED_FETCH_TEAM_LIST = 'FINISHED_FETCH_TEAM_LIST';
var ERROR_FETCH_TEAM_LIST = 'ERROR_FETCH_TEAM_LIST';
var FETCH_TEAM_ALL = 'FETCH_TEAM_ALL';
var FINISHED_FETCH_TEAM_ALL = 'FINISHED_FETCH_TEAM_ALL';
var ERROR_FETCH_TEAM_ALL = 'ERROR_FETCH_TEAM_ALL';
var FETCH_TEAM_COUNT = 'FETCH_TEAM_COUNT';
var FINISHED_FETCH_TEAM_COUNT = 'FINISHED_FETCH_TEAM_COUNT';
var ERROR_FETCH_TEAM_COUNT = 'FETCH_TEAM_COUNT';
var FETCH_TEAM_MEMBER = 'FETCH_TEAM_MEMBER';
var FINISHED_FETCH_TEAM_MEMBER = 'FINISHED_FETCH_TEAM_MEMBER';
var ERROR_FETCH_TEAM_MEMBER = 'ERROR_FETCH_TEAM_MEMBER';
var FETCH_CLIENT_ALL = 'FETCH_CLIENT_ALL';
var FINISHED_FETCH_CLIENT_ALL = 'FINISHED_FETCH_CLIENT_ALL';
var ERROR_FETCH_CLIENT_ALL = 'ERROR_FETCH_CLIENT_ALL';
var FETCH_CLIENT_LIST = 'FETCH_CLIENT_LIST';
var FINISHED_FETCH_CLIENT_LIST = 'FINISHED_FETCH_CLIENT_LIST';
var ERROR_FETCH_CLIENT_LIST = 'ERROR_FETCH_CLIENT_LIST';
var FETCH_CLIENT_MAINS = 'FETCH_CLIENT_MAINS';
var FINISHED_FETCH_CLIENT_MAINS = 'FINISHED_FETCH_CLIENT_MAINS';
var ERROR_FETCH_CLIENT_MAINS = 'ERROR_FETCH_CLIENT_MAINS';
var FETCH_CLIENT_PROJECT = 'FETCH_CLIENT_PROJECT';
var FINISHED_FETCH_CLIENT_PROJECT = 'FINISHED_FETCH_CLIENT_PROJECT';
var ERROR_FETCH_CLIENT_PROJECT = 'ERROR_FETCH_CLIENT_PROJECT';
var FETCH_PROJECT_ALL = 'FETCH_PROJECT_ALL';
var FINISHED_FETCH_PROJECT_ALL = 'FINISHED_FETCH_PROJECT_ALL';
var ERROR_FETCH_PROJECT_ALL = 'ERROR_FETCH_PROJECT_ALL';
var FETCH_PROJECT_MEMBER = 'FETCH_PROJECT_MEMBER';
var FINISHED_FETCH_PROJECT_MEMBER = 'FINISHED_FETCH_PROJECT_MEMBER';
var ERROR_FETCH_PROJECT_MEMBER = 'ERROR_FETCH_PROJECT_MEMBER';
var FETCH_PROJECT = 'FETCH_PROJECT';
var FINISHED_FETCH_PROJECT = 'FINISHED_FETCH_PROJECT';
var ERROR_FETCH_PROJECT = 'ERROR_FETCH_PROJECT';
var FETCH_DOMAIN_LIST = 'FETCH_DOMAIN_LIST';
var FINISHED_FETCH_DOMAIN_LIST = 'FINISHED_FETCH_DOMAIN_LIST';
var ERROR_FETCH_DOMAIN_LIST = 'ERROR_FETCH_DOMAIN_LIST';
var FETCH_DOMAIN_ALL = 'FETCH_DOMAIN_ALL';
var FINISHED_FETCH_DOMAIN_ALL = 'FINISHED_FETCH_DOMAIN_ALL';
var ERROR_FETCH_DOMAIN_ALL = 'ERROR_FETCH_DOMAIN_ALL';

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi ./node_modules/razzle-dev-utils/prettyNodeErrors.js (webpack)/hot/poll.js?300 ./src ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ainkhm/Desktop/tga-app/node_modules/razzle-dev-utils/prettyNodeErrors.js */"./node_modules/razzle-dev-utils/prettyNodeErrors.js");
__webpack_require__(/*! /Users/ainkhm/Desktop/tga-app/node_modules/webpack/hot/poll.js?300 */"./node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__(/*! /Users/ainkhm/Desktop/tga-app/src */"./src/index.js");


/***/ }),

/***/ "@babel/code-frame":
/*!************************************!*\
  !*** external "@babel/code-frame" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/code-frame");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "css-select":
/*!*****************************!*\
  !*** external "css-select" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("css-select");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jest-message-util":
/*!************************************!*\
  !*** external "jest-message-util" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jest-message-util");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-preset-default":
/*!*************************************!*\
  !*** external "jss-preset-default" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-preset-default");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-hash-link":
/*!*****************************************!*\
  !*** external "react-router-hash-link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-hash-link");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map