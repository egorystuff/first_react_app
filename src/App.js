import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
	const [posts, setPosts] = useState([{ id: 1, title: 'JavaScript', body: 'Description' }]);

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

			<div>
				<MySelect
					defaultValue="Сортировка"
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По Описанию' },
					]}
				/>
			</div>

			{posts.length ? (
				<PostList remove={removePost} posts={posts} title="Список постов" />
			) : (
				<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
			)}
		</div>
	);
}

export default App;
