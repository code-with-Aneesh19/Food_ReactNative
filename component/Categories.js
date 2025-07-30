// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { categories } from "../constants"; // ✅ data import

// const Categories = () => {
//   // ✅ component naam Capital se
//   return (
//     <View style={{ marginTop: 16 }}>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={{ overflow: "visible" }}
//         contentContainerStyle={{ paddingHorizontal: 15 }}
//       >
//         {categories.map((category, index) => (
//           <View
//             key={index}
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               marginRight: 24,
//               flex: 1,
//             }}
//           >
//             <View style={styles.circle} />
//             <Text>{category.name}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;

// const styles = StyleSheet.create({
//   circle: {
//     backgroundColor: "#eee",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 5,
//   },
// });

// import React, { useState } from "react";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { categories } from "../constants"; // ✅ data import

// const [activeCategory, setActiveCategory] = useState(null);

// const Categories = () => {
//   return (
//     <View style={{ marginTop: 16 }}>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={{ overflow: "visible" }}
//         contentContainerStyle={{ paddingHorizontal: 15 }}
//       >
//         {categories.map((category, index) => (
//           let isActive = category.id == activeCategory;
//           let btnClass = isActive? 'bg-gray-600' : 'bg-gray-200';
//           let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500'
//           <View
//             key={index}
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               marginRight: 24,
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => setActiveCategory(category.id)}
//               style={styles.circle}
//             >
//               <Image
//                 style={{ width: 45, height: 45 }}
//                 source={category.Image}
//               />
//               <Text>{category.name}</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;

// const styles = StyleSheet.create({
//   circle: {
//     backgroundColor: "#eee",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 5,
//   },
// });

import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories } from "../constants"; // ✅ your data import

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;

          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={[
                  styles.circle,
                  isActive ? styles.activeCircle : styles.inactiveCircle,
                ]}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.Image}
                />
              </TouchableOpacity>
              <Text style={isActive ? styles.activeText : styles.inactiveText}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  activeCircle: {
    backgroundColor: "#ccc", // Active background
  },
  inactiveCircle: {
    backgroundColor: "#eee", // Inactive background
  },
  activeText: {
    color: "#222",
    fontWeight: "600",
  },
  inactiveText: {
    color: "#888",
  },
});
