export enum RouterPath {
    ROOT = '/',
    PAGE_NOT_FOUND = '*',

    // intro
    REACT_TRAITS = 'react-traits',
    HELLO_WORLD = 'hello-world',
    JSX_BASICS = 'jsx-basics',
    JSX_CREATE_ELEMENT = 'jsx-create-element',
    JSX_DATA_TYPES = 'jsx-data-types',
    JSX_FRAGMENTS = 'jsx-fragments',
    JSX_ARRAYS = 'jsx-arrays',
    JSX_EVENT_HANDLERS = 'jsx-event-handlers',
    JSX_CONDITIONAL = 'jsx-conditional',
    PROPS_AND_CHILDREN = 'props-and-children',
    RENDERING_PROCESS = 'rendering-process',

    // hooks basics
    USE_STATE_BASICS = 'usestate-basics',
    PREV_STATE_UPDATE = 'prev-state-update',
    DIRECT_STATE_MUTATION = 'direct-state-mutation',
    USE_COUNTER = 'use-counter',
    USE_MERGED_STATE = 'use-merged-state',
    USE_STATE_LAZY_INIT = 'use-state-lazy-init',
    STORING_FUNCTIONS = 'storing-functions',
    USE_STATE_AND_NEW_RENDERS = 'use-state-and-new-renders',
    DIRECT_DOM_CHANGES = 'direct-dom-changes',

    // side effects
    COMPONENT_LIFECYCLE_EFFECTS = 'component-lifecycle-effects',
    EFFECTS_DEPENDENCIES = 'effect-dependencies',
    LOCAL_STORAGE_SYNC = 'local-storage-sync',
    GLOBAL_EVENT_LISTENERS = 'global-event-listeners',
    USE_EFFECT_SET_INTERVAL = 'use-effect-set-interval',
    FETCH_DATA_USE_EFFECT = 'fetch-data-use-effect',
    BEWARE_OF_INFINITE_LOOPS = 'beware-of-infinite-loops',
    NO_NEED_TO_USE_EFFECT = 'no-need-to-use-effect',
    EFFECTS_SEQUENCE = 'effects-sequence',
    BATCHING_EFFECTS = 'batching-effects',

    // imperative code
    CONTROLLED_INPUT = 'controlled-input',
    UNCONTROLLED_INPUT = 'uncontrolled-input',
    ROCK_SCISSORS_PAPER = 'rock-scissors-paper',
    STORING_STATE_IN_USEREF = 'storing-state-in-useref',
    USE_IMPERATIVE_HANDLE = 'use-imperative-handle',

    // memoization
    LIST_WITHOUT_MEMOIZATION = 'list-without-memoization',
    LIST_WITH_MEMOIZATION = 'list-with-memoization',
    USE_UPDATE_EFFECT = 'use-update-effect',
    WHEN_REACT_RENDERS = 'when-react-renders',
    USE_MEMO = 'use-memo',
    MEMOIZED_REF_CALLBACK = 'memoized-ref-callback',

    // components lifecycle
    KEYS_AND_LISTS = 'keys/keys-and-lists',
    KEYS_REMOUNT_COMPONENT = 'keys/remount-component',
    KEYS_COMPONENTS_STRUCTURE = 'keys/components-structure',
    RANDOM_RENDERING = 'random-rendering',
    LIFECYCLE_AMD_MEMOIZATION = 'lifecycle-and-memoization',
    FUNCTION_OR_COMPONENT = 'function-or-component',

    // context and reducer
    COUNTER_REDUCER = 'counter-reducer',
    REDUCER_LAZY_INIT = 'reducer-lazy-init',
    TOGGLE_REDUCER = 'toggle-reducer',
    RERENDER_REDUCER = 'rerender-reducer',
    USE_CONTEXT = 'use-context',
    CONTACT_BOOK = 'contact-book',
    VEGAN_DRAGON = 'vegan-dragon',

    // state management
    STATE_REMATCH = 'state-rematch',
    STATE_ZUSTAND = 'state-zustand',
    STATE_JOTAI = 'state-jotai',

    // data fetching
    DATA_FETCHING_USE_EFFECT = 'data-fetching/with-use-effect',
    REACT_QUERY = 'data-fetching/react-query',
    SWR = 'data-fetching/swr',

    // more custom hooks
    USE_WHAT_CAUSED_RENDER = 'use-what-caused-render',
    USE_HOVERED = 'use-hovered',
    USE_PREVIOUS_RENDER_VALUE = 'use-previous-render-value',
    USE_HISTORY = 'use-history',
    TRACK_MOUSE_POSITION = 'track-mouse-position',
    USE_THROTTLED_STATE = 'use-throttled-state',
    USE_DEBOUNCED_STATE = 'use-debounced-state',
    USE_TIMEOUT = 'use-timeout',
    USE_CLICK_OUTSIDE = 'use-click-outside',
    USE_ELEMENT_SIZE = 'use-element-size',

    // react 19
    USE_FORM_STATUS = 'use-form-status',
    USE_OPTIMISTIC = 'use-optimistic',
    USE_ACTION_STATE = 'use-action-state',

    // misc
    ERROR_BOUNDARY = 'error-boundary',
    SUSPENSE = 'suspense',
}
