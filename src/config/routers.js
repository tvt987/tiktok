import { HeaderOnly } from '~/static/Layout/Layout';
import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/ab', component: Following },
    { path: '/account/:nickname', component: Search },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
