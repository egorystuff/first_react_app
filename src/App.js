import React, { useMemo, useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'Description' },
		{ id: 2, title: 'React', body: 'Description' },
		{ id: 3, title: 'C++', body: 'Description' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });

	const sortedPosts = useMemo(() => {
		console.log('вызов ф-ции getSortedPosts');

		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		} else {
			return posts;
		}
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
	}, [filter.query, sortedPosts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	// получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className="App">
			<PostForm create={createPost} />

			<hr style={{ margin: '15px 0' }} />

			<PostFilter filter={filter} setFilter={setFilter} />

			{sortedAndSearchedPosts.length ? (
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
			) : (
				<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
			)}
		</div>
	);
}

export default App;
