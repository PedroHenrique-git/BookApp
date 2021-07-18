import { MainContainer } from './style';
import TypeLink from '../../components/TypeLink/TypeLink';
import colorless from '../../images/icons-types/normal.svg';
import darkness from '../../images/icons-types/darkness.svg';
import dragon from '../../images/icons-types/dragon.svg';
import fairy from '../../images/icons-types/fairy.svg';
import fighting from '../../images/icons-types/fighting.svg';
import fire from '../../images/icons-types/fire.svg';
import grass from '../../images/icons-types/grass.svg';
import lightning from '../../images/icons-types/lightning.svg';
import metal from '../../images/icons-types/metal.svg';
import psychic from '../../images/icons-types/psychic.svg';
import water from '../../images/icons-types/water.svg';

export default function Index(): JSX.Element {
    return (
        <MainContainer>
            <section className="conteudo">
                <div className="conteudo_title">
                    <h1>Select the type of pokemon</h1>
                </div>
                <div className="types_link-wrap">
                    <TypeLink img={colorless} type="colorless" />
                    <TypeLink img={darkness} type="darkness" />
                    <TypeLink img={dragon} type="dragon" />
                    <TypeLink img={fairy} type="fairy" />
                    <TypeLink img={fighting} type="fighting" />
                    <TypeLink img={fire} type="fire" />
                    <TypeLink img={grass} type="grass" />
                    <TypeLink img={lightning} type="lightning" />
                    <TypeLink img={metal} type="metal" />
                    <TypeLink img={psychic} type="psychic" />
                    <TypeLink img={water} type="water" />
                </div>
            </section>
        </MainContainer>
    );
}
