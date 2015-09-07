/**
 * Continuous Update Tools
 * Created by Sam on 9/8/15.
 */
var exec    = require('cordova/exec'),
    cordova = require('cordova');

module.exports = {

    checkUpdate:function(successCallback, errorCallback,args){
        if(args == null || args == undefined){
            args = {};
        }
        args.updateServer = "http://daz.so/app/android/version.txt";
        exec(successCallback, errorCallback, "CuManager", "checkUpdate", [args]);
    }

};