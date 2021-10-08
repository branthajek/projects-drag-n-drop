// Auto-bind decorator
// This is an example of a custom decorator, and how it could be applied.
// Binding "this" is no longer a necessary pattern with ES6 functions, but I think it's cool nonetheless
export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}