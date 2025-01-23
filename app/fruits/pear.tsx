import { Link } from 'expo-router';
import {View, Text, Image} from 'react-native';
import { IndexButton } from '../../components/buttonTemplate';

export default function PearPage(){
    return(
        <View>
            <Text>Pear</Text>
            <Image source={require('../../assets/pear.png')} style={{ width: 100, height: 100 }} />
            <Text>You may go back home using the link below or the button</Text>
            <Link href="/">Home link</Link>        
            <IndexButton/>
        </View>
    );
}