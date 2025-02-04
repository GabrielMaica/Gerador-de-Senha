import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export default function ModalPassword({password, handleClose}){
    const {saveItem} = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)

        alert("Senha salva com sucesso!")
        handleClose()

    }



    return(
        <View style={styles.container}>
            <View style={styles.content}> 
            <Text style={styles.title}>Senha Gerada</Text>

            <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
             <Text style={styles.text}>
                {password}
             </Text>
            </Pressable>
                
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                    <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        backgroundColor: "white",
        width: "60%",
        padding: 24,
        borderRadius:8,
        alignItems:"center",
        justifyContent: "center"

    },
    title:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#000",
        marginBottom: 24,
        alignContent: 'center'
    },
    innerPassword:{
        backgroundColor: "#000",
        width:"90%",
        padding:14,
        borderRadius:8
    },
    text:{
        color:"#FFF",
        textAlign:"center",
        backgroundColor:"Black"
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems:"center",
        justifyContent: "space-between"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop: 14,
        marginTop: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor:"#392DE9",
        borderRadius: 8,
        color: "#FFF"
    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight: "bold"
    }
})

