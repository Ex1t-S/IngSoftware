import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../../src/lib/firebase"; // si configuraste alias: "@/lib/firebase"

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

   const onSignIn = async () => {
    // Validaciones mínimas
    if (!email.trim() || !email.includes("@")) return Alert.alert("Email inválido");
    if (!password) return Alert.alert("Ingresá tu contraseña");

    try {
      setLoading(true);

      // 1) Login en Firebase
      const { user } = await signInWithEmailAndPassword(auth, email.trim(), password);

      // 2) (Opcional) exigir verificación de email
      // if (!user.emailVerified) {
      //   return Alert.alert("Verificá tu correo", "Te enviamos un mail de verificación.");
      // }

      // 3) Navegar al área logueada
      router.replace("/(tabs)");
    } catch (e: any) {
      const code = String(e?.code || "");
      const human =
        code.includes("auth/invalid-credential") ? "Credenciales inválidas" :
        code.includes("auth/user-not-found")     ? "Usuario no encontrado" :
        code.includes("auth/wrong-password")     ? "Contraseña incorrecta" :
        code.includes("auth/too-many-requests")  ? "Demasiados intentos. Probá más tarde." :
        "No pudimos iniciar sesión. Intentá de nuevo.";
      Alert.alert("Error", human);
      console.log("Login error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Header */}
          <View style={styles.logoWrap}>
            <Ionicons name="medkit-outline" size={28} color="#16A34A" />
          </View>
          <Text style={styles.title}>PharmaFácil</Text>
          <Text style={styles.subtitle}>Tu medicación, sin complicaciones.</Text>

          {/* Inputs */}
          <View style={styles.form}>
            <TextInput
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
              style={styles.input}
            />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textContentType="password"
              returnKeyType="done"
              style={styles.input}
            />

            <Pressable style={styles.primaryBtn} onPress={onSignIn}>
              <Text style={styles.primaryText}>Iniciar sesión</Text>
            </Pressable>

            {/* Forgot password */}
            <Link href="/auth/forgot" style={styles.link}>
              ¿Olvidaste tu contraseña?
            </Link>
          </View>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.divider} />
          </View>

          {/* Social buttons */}
          <View style={{ gap: 10, width: "100%" }}>
            <Pressable style={styles.socialBtn} onPress={() => { /* TODO: Google sign-in */ }}>
              <AntDesign name="google" size={18} color="#111827" />
              <Text style={styles.socialText}>Continuar con Google</Text>
            </Pressable>

            <Pressable style={styles.socialBtn} onPress={() => { /* TODO: Apple sign-in */ }}>
              <AntDesign name="apple" size={20} color="#111827" />
              <Text style={styles.socialText}>Continuar con Apple</Text>
            </Pressable>
          </View>

          {/* Register */}
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <Text style={{ color: "#6B7280" }}>¿No tenés cuenta? </Text>
            <Link href="/auth/register" style={[styles.link, { paddingVertical: 0 }]}>
              Crear una cuenta
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 16,
  },
  logoWrap: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: "#ECFDF5",
    alignItems: "center", justifyContent: "center",
    marginTop: 12,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#111827" },
  subtitle: { fontSize: 14, color: "#6B7280", textAlign: "center" },

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

  link: { color: "#16A34A", fontWeight: "600", paddingVertical: 8 },

  dividerRow: { flexDirection: "row", alignItems: "center", gap: 10, width: "100%", marginTop: 8 },
  divider: { flex: 1, height: 1, backgroundColor: "#E5E7EB" },
  dividerText: { color: "#9CA3AF" },

  socialBtn: {
    height: 48, borderRadius: 12, borderWidth: 1, borderColor: "#E5E7EB",
    backgroundColor: "#F9FAFB", alignItems: "center", justifyContent: "center",
    flexDirection: "row", gap: 8,
  },
  socialText: { color: "#111827", fontWeight: "600" },
});
