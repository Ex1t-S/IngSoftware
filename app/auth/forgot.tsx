import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onReset = async () => {
    if (!email.includes("@")) return Alert.alert("Email inválido");
    try {
      setLoading(true);
      // TODO: Firebase -> sendPasswordResetEmail(auth, email)
      Alert.alert("Listo", "Te enviamos un correo para recuperar tu contraseña");
    } catch (e: any) {
      Alert.alert("No pudimos enviar el correo", e?.message ?? "Intenta de nuevo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 , backgroundColor: "#ffff"}} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar contraseña</Text>
        <Text style={styles.subtitle}>Ingresá tu email para enviarte el enlace</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            returnKeyType="done"
          />

          <Pressable style={[styles.primaryBtn, loading && { opacity: 0.7 }]} onPress={onReset} disabled={loading}>
            <Text style={styles.primaryText}>{loading ? "Enviando..." : "Enviar enlace"}</Text>
          </Pressable>

          <Link href="/auth/login" style={[styles.link, { alignSelf: "center", marginTop: 12 }]}>
            Volver al inicio de sesión
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
  title: { fontSize: 22, fontWeight: "700", color: "#111827" },
  subtitle: { fontSize: 14, color: "#6B7280" },
  form: { width: "100%", gap: 12, marginTop: 6 },
  input: {
    height: 48, borderRadius: 12, paddingHorizontal: 14,
    backgroundColor: "#F3F4F6", borderWidth: 1, borderColor: "#E5E7EB",
  },
  primaryBtn: {
    height: 48, borderRadius: 12, alignItems: "center", justifyContent: "center",
    backgroundColor: "#22C55E",
  },
  primaryText: { color: "white", fontWeight: "700" },
  link: { color: "#16A34A", fontWeight: "600" },
});
