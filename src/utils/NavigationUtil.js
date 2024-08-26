
import { createNavigationContainerRef, CommonActions, StackActions } from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef()

export async function navigate(routeName, params) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(routeName, params))
    }
}

export async function replace(routeName, params) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.replace(routeName, params))
    }
}

export async function resetAndNavigate(routeName) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: routeName }],
            })
        )
    }
}

export async function goBack() {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack())
    }
}

export async function push(routeName) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(routeName))
    }
}


export async function prepareNavigation() {
    navigationRef.isReady()
}