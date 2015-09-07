package com.jianzhi_inc.dandelion.android;

import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 *
 * Created by Sam on 9/7/15.
 */
public class CuManager extends CordovaPlugin {

    static String TAG = "JzCU";


    @Override
    public boolean execute(String action, JSONArray rawArgs, CallbackContext callbackContext) throws JSONException {

        Log.e(TAG, "action called " + action);
        return false;
        //return super.execute(action, rawArgs, callbackContext);
    }
}
