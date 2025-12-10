package com.rndemo2025;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

/**
 * 平台相关模块。
 */
public class PlatformModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    private static final int ZERO = 0;

    public PlatformModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "PlatformModule"; // 平台模块名称定义为"PlatformModule"。
    }

    /**
     * 平台直接提供原生定义的常量。
     * @return 常量KV列表。
     */
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_LONG_KEY, "原生平台预设值：LONG");
        constants.put(DURATION_SHORT_KEY, "原生平台预设值：SHORT");
        return constants;
    }

    /**
     * 平台展示Toast提示。
     * @param message 提示信息。
     * @param duration 展示时长。
     */
    @ReactMethod
    public void showToast(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    /**
     * 使用回调函数的形式进行原生平台交互。
     * @param params 参数。
     * @param success 成功回调。
     * @param failure 失败回调。
     */
    @ReactMethod
    public void withCallback(String params, Callback success, Callback failure) {
        try {
//             /* 尝试除以0。 */
//             int num = 0;
//             int result = num / ZERO;
            success.invoke("原生回调加工：" + params);
        } catch (Exception e) {
            failure.invoke(e.getMessage());
        }
    }

    /**
     * 使用Promise的形式进行原生平台交互。
     * @param params 参数。
     * @param promise Promise对象，含有resolve和reject，在RN侧可以then及catch。
     */
    @ReactMethod
    public void withPromise(String params, Promise promise) {
        try {
//             /* 尝试除以0。 */
//             int num = 0;
//             int result = num / ZERO;
            promise.resolve("原生Promise加工：" + params);
        } catch (Exception e) {
            // 前一个参数会填写到RN的{"nativeStackAndroid":[],"userInfo":null,"code":"Error"}结构体的code位置；
            // 后一个参数在RN的console.log方法中会进行输出。
            promise.reject(e.getMessage(), e.getMessage());
        }
    }
}