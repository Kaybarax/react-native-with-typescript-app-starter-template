package test;

import android.content.Context;

import com.facebook.react.module.annotations.ReactModule;
//import android.support.test.runner.AndroidJUnit4;
//import android.support.v4.*;

import org.junit.Before;
//import org.robolectric.RobolectricTestRunner;

//@RunWith(RobolectricTestRunner.class)
//@Config(
//        application = TestApplication.class
//)
//@PowerMockIgnore({"org.mockito.*", "org.robolectric.*", "androidx.*", "android.*"})
public class AppSecurityModuleSpec {

    private ReactModule reactModule;

//    @Before
    public void beforeEach() {
        // Retrieve application context.
//        Context applicationContext = ApplicationProvider.getApplicationContext();
        Context applicationContext;

        // Recreate ReactApplicationContext which ReactModule depends upon.
        // ReactApplicationContext sole purpose as documented in its source code
        // is to preserve type integrity of ApplicationContext over Context
        // (which android Context obviously does not). This should be safe
        // thus. See my post here:
        // `https://stackoverflow.com/questions/49962298/writing-unit-test-for-react-native-native-android-methods`.
//        ReactApplicationContext reactApplicationContext = new ReactApplicationContext(applicationContext);

        // Instantiate the module.
//        reactModule = new ReactModule(reactApplicationContext);
    }

}
