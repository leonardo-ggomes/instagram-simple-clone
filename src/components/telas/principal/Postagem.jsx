import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import ThreePoints from '../../../assets/svg/threepoints.svg'
import Comment from '../../../assets/svg/comment.svg'
import Heart from '../../../assets/svg/heart.svg'
import Share from '../../../assets/svg/share.svg'
import Save from '../../../assets/svg/save.svg'
import { Acao } from "../../global/Topo"


const Curtidas = () => {
    return (
        <View style={styles.row}>
            <View style={styles.rowCurtida}>
                <View>
                    <Image style={styles.fotoCurtida} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGJHfg_wpRmKqjnlgGgSNRcR5Av6MXEg40w&usqp=CAU" />
                </View>
                <View>
                    <Image style={styles.fotoCurtida} src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_640.jpg" />
                </View>
                <View>
                    <Image style={styles.fotoCurtida} src="https://img.freepik.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg" />
                </View>
            </View>
            <View style={styles.row}>
                <Text>Curtido por </Text>
                <Text style={{fontWeight:'bold'}}>Marquinhos</Text>
                <Text> e outros</Text>
            </View>
        </View>
    )
}

const AcoesPostagem = () => {
    return (
        <View style={styles.containerAcoesPostagem}>
            <View style={styles.row}>
                <Acao child={Heart} />
                <Acao child={Comment} />
                <Acao child={Share} />
            </View>
            <View>
                <Acao child={Save} />
            </View>
            
        </View>
    )
}

const PostagemConteudo = ({conteudo}) => {
    return (
        <View style={styles.containerPostagemConteudo}>
            <Image style={styles.conteudo} resizeMode="cover" src={conteudo} />
        </View>
    )
}

const PostagemTopo = ({foto, nome, localizacao}) => {
    return (
        <View style={styles.areaPostagemTopo}>
            <View style={styles.row}>
                <Image style={styles.fotoPostagem} src={foto} />
                <View >
                    <View>
                        <Text style={styles.nomePerfil}>{nome}</Text>
                        <Text style={styles.descricaoPostagem}>{localizacao}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Pressable>
                    <ThreePoints/>
                </Pressable>
            </View>
        </View>
    )
}

const Postagem = ({urlConteudo, fotoPublicador, nomePublicador, localPublicador}) => {
    return (
        <View style={styles.container}>
            <PostagemTopo foto={fotoPublicador} nome={nomePublicador} localizacao={localPublicador} />
            <PostagemConteudo conteudo={urlConteudo}/>
            <AcoesPostagem/>
            <Curtidas/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        maxHeight: 600,
        borderTopWidth:0.5,
        borderTopColor:'#e3e6e4',
    },
    containerPostagemConteudo:{
        backgroundColor:'#e3e6e4',
        height:'70%'
    },
    containerAcoesPostagem:{
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },  
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    rowCurtida:{
        flexDirection:'row',
        alignItems:'center',
        margin: 10
    },
    fotoCurtida:{
        height:20,
        width:20,
        borderRadius:20,
        marginLeft: -5
    },
    conteudo:{
        flex:1,
        width:'100%'
    },
    fotoPostagem: {
        height:35,
        width:35,
        borderRadius:35,
        marginRight:10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaPostagemTopo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    nomePerfil:{
        fontSize:15,
        fontWeight:'bold'
    },
    descricaoPostagem:{
        fontWeight:"400"
    }
})

export default Postagem