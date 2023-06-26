
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from '../screens/CategoryList';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import AddCategoryPage from '../screens/AddCategoryPage';
import NavigationBar from '../screens/NavigationBar';
import AllProducts from '../screens/AllProducts';
import CategoryUpdate from '../screens/CategoryUpdate';


function LoginStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="NavigationBar"
        component={NavigationBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllProducts"
        component={AllProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryUpdate"
        component={CategoryUpdate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCategoryPage"
        component={AddCategoryPage}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

export default LoginStack;
