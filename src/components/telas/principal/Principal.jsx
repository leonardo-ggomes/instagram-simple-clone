import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Topo from '../../global/Topo'
import StatusContatos from './StatusContatos'
import Postagem from './Postagem'


const dataFeed = [
    {
        'id': Math.random().toString(36).substring(2, 25),
        'foto_publicador': 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg',
        'url_conteudo': 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg',
        'nome_publicador': 'Maria',
        'local_publicador': 'São Paulo, SP'
    },
    {
        'id': Math.random().toString(36).substring(2, 25),
        'foto_publicador': 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg',
        'url_conteudo': 'https://s2-g1.glbimg.com/wl2hQbkdxTeEnAb-EDGp1uZ_QCI=/0x204:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/m/5fg9FlSy2SThA0KoSQyQ/gusttavo-lima-florianopolis.jpeg',
        'nome_publicador': 'Marquinhos',
        'local_publicador': 'Gustavo Lima - Aúdio'
    },
    {
        'id': Math.random().toString(36).substring(2, 25),
        'foto_publicador': 'https://img.freepik.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg',
        'url_conteudo': 'https://a.cdn-hotels.com/gdcs/production44/d941/9e8ea129-e035-43e1-9b6c-b721bcfc0bca.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        'nome_publicador': 'Paulo',
        'local_publicador': 'Praia Grande'
    },
]


const TelaPrincipal = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Topo />
            <StatusContatos />
            <FlatList
                data={dataFeed}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <Postagem
                        fotoPublicador={item.foto_publicador}
                        urlConteudo={item.url_conteudo}
                        nomePublicador={item.nome_publicador}
                        localPublicador={item.local_publicador}
                    />)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    }
})

export default TelaPrincipal