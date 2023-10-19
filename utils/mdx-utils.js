import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    // BUSCAR UM POST ESPECIFICO.
    const { data } = await api.get(`/posts?id=eq.${id}`);
    if (data && data.length > 0) {
    return data[0];
} else {
    const router = router();
    router.push('/404');
    return {};
}
};
