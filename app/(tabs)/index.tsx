import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-red-500">Styling just works! 🎉</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


