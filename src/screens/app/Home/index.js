import React, {useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../components/data/categories';
import CategoryBox from '../../../components/CategoryBox';
const Home = () => {
  const [keyword, setKeyword] = useState(false);
  const renderCategoryItem = ({item}) => {
    <CategoryBox title={item?.title} image={item?.image} />;
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
