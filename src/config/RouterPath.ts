export const BASE_PATH = '/mastering-react';

export enum RouterPath {
    // general
    ROOT = '/',
    PAGE_NOT_FOUND = '*',
    ABOUT = 'about',

    // intro
    REACT_TRAITS = 'intro/react-traits',
    HELLO_WORLD = 'intro/hello-world',
    JSX_BASICS = 'intro/jsx-basics',
    JSX_CREATE_ELEMENT = 'intro/jsx-create-element',
    JSX_DATA_TYPES = 'intro/jsx-data-types',
    JSX_FRAGMENTS = 'intro/jsx-fragments',
    JSX_ARRAYS = 'intro/jsx-arrays',
    JSX_EVENT_HANDLERS = 'intro/jsx-event-handlers',
    JSX_CONDITIONAL = 'intro/jsx-conditional',
    PROPS_AND_CHILDREN = 'intro/props-and-children',
    RENDERING_PROCESS = 'intro/rendering-process',

    // hooks basics
    USE_STATE_BASICS = 'hooks-basics/use-state-basics',
    PREV_STATE_UPDATE = 'hooks-basics/prev-state-update',
    DIRECT_STATE_MUTATION = 'hooks-basics/direct-state-mutation',
    USE_COUNTER = 'hooks-basics/use-counter',
    USE_MERGED_STATE = 'hooks-basics/use-merged-state',
    USE_STATE_LAZY_INIT = 'hooks-basics/use-state-lazy-init',
    STORING_FUNCTIONS = 'hooks-basics/storing-functions',
    USE_STATE_AND_NEW_RENDERS = 'hooks-basics/use-state-and-new-renders',
    DIRECT_DOM_CHANGES = 'hooks-basics/direct-dom-changes',

    // side effects
    COMPONENT_LIFECYCLE_EFFECTS = 'side-effects/component-lifecycle-effects',
    EFFECTS_DEPENDENCIES = 'side-effects/effect-dependencies',
    LOCAL_STORAGE_SYNC = 'side-effects/local-storage-sync',
    GLOBAL_EVENT_LISTENERS = 'side-effects/global-event-listeners',
    USE_EFFECT_SET_INTERVAL = 'side-effects/use-effect-set-interval',
    FETCH_DATA_USE_EFFECT = 'side-effects/fetch-data-use-effect',
    BEWARE_OF_INFINITE_LOOPS = 'side-effects/beware-of-infinite-loops',
    NO_NEED_TO_USE_EFFECT = 'side-effects/no-need-to-use-effect',
    EFFECTS_SEQUENCE = 'side-effects/effects-sequence',
    BATCHING_EFFECTS = 'side-effects/batching-effects',

    // imperative code
    CONTROLLED_INPUT = 'imperative-code/controlled-input',
    UNCONTROLLED_INPUT = 'imperative-code/uncontrolled-input',
    ROCK_SCISSORS_PAPER = 'imperative-code/rock-scissors-paper',
    STORING_STATE_IN_USEREF = 'imperative-code/storing-state-in-useref',
    USE_IMPERATIVE_HANDLE = 'imperative-code/use-imperative-handle',

    // memoization
    LIST_WITHOUT_MEMOIZATION = 'memoization/list-without-memoization',
    LIST_WITH_MEMOIZATION = 'memoization/list-with-memoization',
    USE_UPDATE_EFFECT = 'memoization/use-update-effect',
    WHEN_REACT_RENDERS = 'memoization/when-react-renders',
    USE_MEMO = 'memoization/use-memo',
    MEMOIZED_REF_CALLBACK = 'memoization/memoized-ref-callback',

    // components lifecycle
    KEYS_AND_LISTS = 'lifecycle/keys-and-lists',
    KEYS_REMOUNT_COMPONENT = 'lifecycle/remount-component',
    KEYS_COMPONENTS_STRUCTURE = 'lifecycle/components-structure',
    RANDOM_RENDERING = 'lifecycle/random-rendering',
    LIFECYCLE_AMD_MEMOIZATION = 'lifecycle/lifecycle-and-memoization',
    FUNCTION_OR_COMPONENT = 'lifecycle/function-or-component',

    // context and reducer
    COUNTER_REDUCER = 'context/counter-reducer',
    REDUCER_LAZY_INIT = 'context/reducer-lazy-init',
    TOGGLE_REDUCER = 'context/toggle-reducer',
    RERENDER_REDUCER = 'context/rerender-reducer',
    USE_CONTEXT = 'context/use-context',
    CONTACT_BOOK = 'context/contact-book',
    VEGAN_DRAGON = 'context/vegan-dragon',

    // state management
    STATE_REMATCH = 'state-management/rematch',
    STATE_ZUSTAND = 'state-management/zustand',
    STATE_JOTAI = 'state-management/jotai',

    // data fetching
    DATA_FETCHING_USE_EFFECT = 'data-fetching/with-use-effect',
    REACT_QUERY = 'data-fetching/react-query',
    SWR = 'data-fetching/swr',

    // routing
    NAVLINK_VS_ANCHOR = 'routing/navlink-vs-anchor',
    LINK_VS_NAVLINK = 'routing/link-vs-navlink',
    USE_NAVIGATE = 'routing/use-navigate',
    USE_LOCATION = 'routing/use-location',
    NESTED_ROUTES = 'routing/nested-routes/*',
    DYNAMIC_ROUTES = 'routing/dynamic-routes',

    // more custom hooks
    USE_WHAT_CAUSED_RENDER = 'hooks/use-what-caused-render',
    USE_HOVERED = 'hooks/use-hovered',
    USE_PREVIOUS_RENDER_VALUE = 'hooks/use-previous-render-value',
    USE_HISTORY = 'hooks/use-history',
    TRACK_MOUSE_POSITION = 'hooks/track-mouse-position',
    USE_THROTTLED_STATE = 'hooks/use-throttled-state',
    USE_DEBOUNCED_STATE = 'hooks/use-debounced-state',
    USE_TIMEOUT = 'hooks/use-timeout',
    USE_CLICK_OUTSIDE = 'hooks/use-click-outside',
    USE_ELEMENT_SIZE = 'hooks/use-element-size',

    // react 19
    USE_FORM_STATUS = 'react-19/use-form-status',
    USE_OPTIMISTIC = 'react-19/use-optimistic',
    USE_ACTION_STATE = 'react-19/use-action-state',

    // misc
    ERROR_BOUNDARY = 'misc/error-boundary',
    SUSPENSE = 'misc/suspense',
    STRICT_MODE = 'misc/strict-mode',
}
