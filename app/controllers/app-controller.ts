//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {isFalse, isNullUndefined, isTrue, objectKeyExists} from "../util/util";
import {TIME_OUT} from "../app-config";

/**
 * sd _ Kaybarax
 * @param key
 * @param model
 * @param expectationFunction
 * @returns {*}
 */
export function displayFieldExpectationSatisfied(key, model, expectationFunction) {
    if (isNullUndefined(model))
        return false;
    if (!objectKeyExists(model, key))
        return false;
    return expectationFunction(model[key]);
}

/**
 * sd _ Kaybarax
 * @param work
 * @param timer
 * @param timeDown
 * @param threadRunComplete
 * @param onWorkSuccess
 * @param onWorkFail
 * @param threadPool
 */
export function serviceWorkerThread(
    work: Function, timer: number, timeDown: number,
    threadRunComplete: Function,
    onWorkSuccess: Function, onWorkFail: Function,
    threadPool: Array<any>
) {

    let countdown: number = timer || TIME_OUT;
    let threadIndex = threadPool.length;//because on push, length increases by one,
                                        // and interval is at former length value
    work.call(null);

    threadPool.push(
        setInterval(_ => {
            let done: boolean = threadRunComplete.call(null);
            console.log('Thread work at -> ', countdown, done)
            if (isTrue(done)) {
                clearInterval(threadPool[threadIndex]);
                onWorkSuccess.call(null);
            } else {
                //if out of time, terminate
                if (countdown <= 0) {
                    clearInterval(threadPool[threadIndex]);
                    onWorkFail.call(null);
                }
            }
            countdown -= timeDown;
        }, 1000)
    );

}
