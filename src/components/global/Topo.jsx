import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native"
import Logo from '../../assets/svg/logo.svg'
import More from '../../assets/svg/more.svg'
import Heart from '../../assets/svg/heart.svg'
import Share from '../../assets/svg/share.svg'


export const Acao = ({child}) => {
    return (
        <Pressable style={styles.pressable}>
            {child}
        </Pressable>
    )
}

const Topo = () => {
    return (
        <View style={styles.topo} >
            <View>
                <Logo />
            </View>
            <View style={styles.acoes}>
                <Acao child={More}/>
                <Acao child={
                    <>
                        <Heart/>
                        <View style={styles.anchor}></View>
                    </>
                }/>
                <Acao child={Share}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topo:{
        height:57,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    },
    acoes:{
        flexDirection:'row',
        alignItems:'center'
    },
    pressable:{
        marginHorizontal:8
    },
    anchor:{
        backgroundColor:'red',
        height:4,
        width:4,
        position:'absolute',
        bottom:-5,
        left:'41%',
        borderRadius:4
    }
})

export default Topo