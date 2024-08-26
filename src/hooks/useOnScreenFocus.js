import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const useOnScreenFocus = (callback = () => { }, dependencies = []) => {
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', callback)

        return () => {
            unsubscribe()
        }
    }, [navigation, ...dependencies])
}

export default useOnScreenFocus