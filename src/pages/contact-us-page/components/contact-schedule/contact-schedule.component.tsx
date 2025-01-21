import useLocalization from '../../../../assets/lang';
import SectionTitleComponent from '../../../../core/shared/section-title/section-title.component';
import css from './contact-schedule.module.scss';
import { Table } from "antd";

const ContactScheduleComponent = () => {
    const translate = useLocalization();

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            align: 'center'
        },
        {
            title: translate('schedule_position'),
            dataIndex: 'position',
            key: 'position',
            width: '33.33%'
        },
        {
            title: translate('schedule_fullName'),
            dataIndex: 'fullName',
            key: 'fullName',
            width: '33.33%'
        },
        {
            title: translate('schedule_time'),
            dataIndex: 'time',
            key: 'time',
            width: '33.33%'
        },
    ];

    const data = [
        { key: 1, position: 'Məsləhətçi', fullName: 'Hacı Hacıyev Asəf oğlu', time: '16:00-18:00' },
        { key: 2, position: 'İdarə Heyətinin sədri', fullName: 'Elxan Əzizov Faiq oğlu', time: '16:00-18:00' },
    ];

    return (
        <div className={css.contact}>
            <section>
                <div className="container">
                    <div className={css.contactSchedule}>
                        <div className={css.heading}>
                            <SectionTitleComponent
                                title={translate('schedule_heading')}
                                description={translate('schedule_description')}
                                forTitle={css.forTitle}
                                forDescription={css.forDescription}
                                headingDescription={css.headingDescription}
                            />
                        </div>
                        <div className={css.schedule}>
                            <div>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination={false}
                                    className={css.customTable}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactScheduleComponent;
