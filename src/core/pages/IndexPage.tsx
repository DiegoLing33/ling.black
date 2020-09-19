import React from "react";
import SocialSection from "../../modules/template/components/SocialSection";

export default function IndexPage() {
    return (
        <div className="row">
            <div className="col-md-6 mt-md-5 mt-sm-4">
                <div className="context-brand">LING • BLACK<sup>®</sup></div>
                <div className="header-info mb-3">Яков (Диего) Линг. Официальная страница разработчика и
                    исполнителя.
                    Настоящим доменным именем <i>(ling.black)</i> подписаны исключительно официальные разработки
                    и продукты Якова.
                    Опознавательные признаки товарного знака могут выглядеть следующим образом: Яков Линг, Диего
                    Линг, Yakov Ling, Diego Ling; официальное кодовое число - 33; diegoling33.
                    По любым вопросам взаимодействия используйте ссылки снизу.
                </div>
                <SocialSection className={"mt-2"}>
                    <SocialSection.Link
                        url={'http://vk.com/diegoling33'}
                        img={'/img/media-vk.svg'}
                        text={'Яков Линг'}
                        className={'mb-2'}
                    />
                    <SocialSection.Link
                        url={'http://instagram.com/diegoling33'}
                        img={'/img/media-inst.svg'}
                        text={'@diegoling33'}
                        className={'mb-2'}
                    />
                    <SocialSection.Link
                        url={'https://github.com/DiegoLing33'}
                        img={'/img/media-github.svg'}
                        text={'DiegoLing33'}
                        className={'mb-2'}
                    />
                    <SocialSection.Link
                        url={'mailto:diegoling33@yandex.ru'}
                        img={'/img/media-mail.svg'}
                        text={'diego@ling.black'}
                        className={'mb-2'}
                    />
                </SocialSection>
            </div>
        </div>);
}