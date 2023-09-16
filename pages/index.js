import ChatWindow from "@/components/ChatWindow";
import Head from "next/head";
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Chat application</title>
            </Head>
            <main>
                <Provider store={store}>
                    <ChatWindow />
                </Provider>
            </main>
        </div>
    )
};
