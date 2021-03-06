import { listenConstruct } from "olympus-r/utils/ConstructUtil";
import { MediatorClass } from "olympus-r/engine/injector/Injector";
/**
 * @author Raykid
 * @email initial_r@qq.com
 * @create date 2017-10-09
 * @modify date 2017-10-09
 *
 * 负责注入的模块
*/
export function DOMMediatorClass(moduleName, skin) {
    var skins = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        skins[_i - 2] = arguments[_i];
    }
    return function (cls) {
        // 调用MediatorClass方法
        cls = MediatorClass(moduleName)(cls);
        // 监听类型实例化，转换皮肤格式
        var finalSkin;
        if (skins.length === 0) {
            finalSkin = skin;
        }
        else {
            skins.unshift(skin);
            finalSkin = skins;
        }
        listenConstruct(cls, function (mediator) { return mediator.skin = finalSkin; });
        // 返回结果类型
        return cls;
    };
}
