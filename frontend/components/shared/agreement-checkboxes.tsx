import {Checkbox} from "@/components/ui/checkbox";

export const AgreementCheckboxes = ({
                                        agree,
                                        setAgree,
                                        subscribe,
                                        setSubscribe
                                    }: {
    agree: boolean,
    setAgree: (val: boolean) => void,
    subscribe: boolean,
    setSubscribe: (val: boolean) => void
}) => (
    <>
        <div className='flex gap-2 mt-5'>
            <Checkbox checked={agree} onCheckedChange={(val) => setAgree(!!val)}
                      className='mt-1 bg-muted'/>
            <label className='text-sm text-muted leading-snug'>
                Я погоджуюсь з{' '}
                <a href='/some-p'
                   className='text-primary underline font-medium'>Умовами
                    використання</a>{' '}
                та{' '}
                <a href='/some-p'
                   className='text-primary underline font-medium'>Політикою
                    конфіденційності</a>.
            </label>
        </div>
        <div className='flex gap-2'>
            <Checkbox checked={subscribe}
                      onCheckedChange={(val) => setSubscribe(!!val)}
                      className='bg-muted'/>
            <p className='text-sm text-muted mb-5'>Отримати розсилку на
                пошту</p>
        </div>
    </>
);
