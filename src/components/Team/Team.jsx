import Staff from '../Staff/Staff';
import StaffBox from '../StaffBox/StaffBox';
import { staffText, TEAM_TEXT_ONE } from '../../utils/constants';
import './Team.css';

export default function Team() {
    return (
        <section className='team' id='Team'>
            <div className='team__container'>
                <ul className="team__container-box-ul">
                    <li className="team__container-box-li">
                        {TEAM_TEXT_ONE}
                    </li>
                </ul>
                <StaffBox>
                    {
                        staffText.map((worker) => (
                            <Staff key={worker.name} {...worker} />))
                    }
                </StaffBox>
            </div>
        </section>
    );
};
