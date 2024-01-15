import React, {useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../components/data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../components/data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
const Home = () => {
  const [keyword, setKeyword] = useState(false);
  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };

  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      {/* <ScrollView style={styles.container}> */}
      <Header
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
        title="Find All You Need"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        style={styles.productsList}
        numColumns={2}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default React.memo(Home);
