import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const useOnScreenBlur = (callback = () => { }, dependencies = []) => {
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', callback)

        return () => {
            unsubscribe()
        }
    }, [navigation, ...dependencies])
}

export default useOnScreenBlur