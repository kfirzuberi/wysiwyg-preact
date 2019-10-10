export const actions = store => ({
    toogleWysiwygVisibility(state) {
        return { wysiwygVisibility: !state.wysiwygVisibility };
    }
});
