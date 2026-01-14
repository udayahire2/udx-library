export const isKeyboardEvent = (e: React.KeyboardEvent) => {
    return e.type === 'keydown' || e.type === 'keyup';
};
