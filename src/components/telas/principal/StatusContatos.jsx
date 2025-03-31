import { Image, Pressable, StyleSheet, View, Text, FlatList } from 'react-native'
import AddStatus from '../../../assets/svg/addstatus.svg'
import LinearGradient from 'react-native-linear-gradient'
import ImagemExemplo from '../../../assets/img/exemplo.jpg'


const dados = [
    {
        id: Math.random().toString(36).substring(2,25),
        nome:'Seu Story',
        proprietario:true,
        imagemPerfil:''
    },
    {
        id: Math.random().toString(36).substring(2,25),
        nome:'Maria',
        imagemPerfil:'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg'
    },
    {
        id: Math.random().toString(36).substring(2,25),
        nome:'Paulo',
        imagemPerfil:'https://img.freepik.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg'
    },
    {
        id: Math.random().toString(36).substring(2,25),
        nome:'Marquinhos',
        imagemPerfil:'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg'
    },
    {
        id: Math.random().toString(36).substring(2,25),
        nome:'Priscila',
        imagemPerfil:'https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_640.jpg'
    },
]

const MeuStatus = () => {
    return (
        <View style={styles.centralizado}>
            <Pressable style={styles.pressableMeuStatus}>
                <View style={styles.addStatus}>
                    <AddStatus width="25" height="25" />
                </View>
            </Pressable>
            <Text style={styles.nomeStatus}>Seu Story</Text>
        </View>

    )
}

const Status = ({nome, foto, meuStatus=false}) => {
    return (
        meuStatus == false ?
        <View style={styles.centralizado}>
            <LinearGradient colors={['#fbaaa7', '#d91a46', '#a60f93']} style={styles.contornoGradientStatus}>
                <Pressable style={styles.pressableAmizadeStatus}>
                    <Image style={styles.fotoStatus} src={foto} resizeMode='cover' />
                </Pressable>
            </LinearGradient>
            <Text style={styles.nomeStatus}>{nome}</Text>
        </View> :
        <MeuStatus/>
    )
}

const StatusContatos = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.areaStatus}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dados}
                keyExtractor={({id}) => id}
                renderItem={
                    ({item}) => <Status meuStatus={item.proprietario || false} nome={item.nome} foto={item.imagemPerfil}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:120
    },
    areaStatus: {
        height: 100,
        padding: 10
    },
    centralizado:{
        alignItems:'center',
    },
    pressableMeuStatus: {
        backgroundColor: '#ffffff',
        height: 79,
        width: 80,
        borderRadius: 69,
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    contornoGradientStatus: {
        height: 79,
        width: 80,
        borderRadius: 69,
        marginHorizontal: 5,
        padding: 2
    },
    fotoStatus: {
        flex: 1,
        width: '100%',
        borderRadius: 65
    },
    pressableAmizadeStatus: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 69,
        borderColor: '#ffffff',
        borderWidth: 1.5
    },
    addStatus: {
        height: 25,
        width: 25,
        borderRadius: 25,
        position: 'absolute',
        bottom: 0,
        right: -5
    },
    nomeStatus:{
        marginTop: 5,
        fontSize:13,
        color:'#000000'
    }
})

export default StatusContatos