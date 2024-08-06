import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { SuccessDialog } from '../SuccessDialog';

import * as S from './FormDialog.styles';

import { Dialog, Radio, ErrorMessage, Checkbox, ToggleBlock } from '@/common/components';
import { useDialog } from '@/common/hooks';

const formSchema = z.object({
  companyName: z.string().trim().min(1, '회사명을 입력해주세요.'),
  numberOfEmployees: z.number({ required_error: '직원수를 입력해주세요.' }).int('정수로 입력해주세요.'),
  name: z.string().trim().min(1, '이름을 입력해주세요.'),
  phone: z.string().trim().min(1, '연락처를 입력해주세요.'),
  email: z.string().trim().min(1, '이메일을 입력해주세요.').email('올바른 이메일을 입력해주세요.'),
  education: z.string().trim().min(1, '관심교육을 선택해주세요.'),
  inquiry: z.string().trim().min(1, '문의내용을 입력해주세요.'),
  terms01: z.string().refine((v) => v === 'true', '개인정보 수집 및 이용 동의에 동의해주세요.'),
  terms02: z.string().optional(),
});
type FormSchema = z.infer<typeof formSchema>;

export default function FormDialog() {
  const { onPresent } = useDialog();
  const openSuccessDialog = () => onPresent(<SuccessDialog />);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      education: '',
      terms01: 'false',
      terms02: 'false',
    },
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    openSuccessDialog();
  };

  return (
    <Dialog
      style={{ width: 800 }}
      title='프로클래스 도입 문의'
      subTitle='프로클래스와 관련하여 궁금한 것이 있다면 무엇이든 물어보세요.'
      contents={
        <div css={S.container}>
          <span>필수*</span>
          <table css={S.table}>
            <tbody>
              <tr>
                <th>
                  회사명 <span>*</span>
                </th>
                <td>
                  <input type='text' autoFocus {...register('companyName')} />
                  <ErrorMessage>{errors?.companyName?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  직원수 <span>*</span>
                </th>
                <td>
                  <input
                    type='number'
                    {...register('numberOfEmployees', {
                      setValueAs: (v: number | string | undefined) => {
                        if (v === '') return undefined;
                        if (typeof v === 'string') return parseInt(v, 10);
                        return v;
                      },
                    })}
                  />
                  <ErrorMessage>{errors?.numberOfEmployees?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  이름 <span>*</span>
                </th>
                <td>
                  <input type='text' {...register('name')} />
                  <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  연락처 <span>*</span>
                </th>
                <td>
                  <input type='text' {...register('phone')} />
                  <ErrorMessage>{errors?.phone?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  이메일 <span>*</span>
                </th>
                <td>
                  <input type='text' {...register('email')} />
                  <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  관심교육 <span>*</span>
                </th>
                <td>
                  <div className='radioGroup'>
                    <Controller
                      name='education'
                      control={control}
                      render={({ field: { ref, name: fieldName, onChange, onBlur, value } }) => {
                        return ['이러닝(법정의무교육)', '마이크로러닝(지식 콘텐츠)', '모두'].map((v, index) => (
                          <Radio
                            ref={ref}
                            key={v}
                            name={fieldName}
                            defaultChecked={v === value}
                            onChange={onChange}
                            onBlur={onBlur}
                            {...register('education')}
                          >
                            {v}
                          </Radio>
                        ));
                      }}
                    />
                  </div>
                  <ErrorMessage>{errors?.education?.message}</ErrorMessage>
                </td>
              </tr>
              <tr>
                <th>
                  문의내용 <span>*</span>
                </th>
                <td>
                  <textarea maxLength={150} {...register('inquiry')}></textarea>
                  <ErrorMessage>{errors?.inquiry?.message}</ErrorMessage>
                </td>
              </tr>
            </tbody>
          </table>
          <div css={S.terms}>
            <ToggleBlock
              view={
                <Controller
                  name='terms01'
                  control={control}
                  render={({ field: { ref, onChange, onBlur, value } }) => {
                    return (
                      <Checkbox
                        ref={ref}
                        onChange={(e) => onChange(e.target.checked ? 'true' : 'false')}
                        onBlur={onBlur}
                        defaultChecked={value === 'true'}
                      >
                        <p>
                          개인정보 수집 및 이용 동의 <span>(필수)</span>
                        </p>
                      </Checkbox>
                    );
                  }}
                />
              }
              contents={
                <>
                  <h5>개인정보 수집 및 이용 동의 (필수)</h5>
                  <p>
                    개인정보 수집 및 이용목적과, 수집하는 개인정보의 항목, 개인정보의 보유기간을 안내합니다.
                    <br />본 개인정보는 개인정보처리방침에 근거하여 관리됩니다.
                  </p>
                  <ul>
                    <li>(1) 수집 및 이용목적 : 문의 내역에 대한 상담 접수 및 처리</li>
                    <li>(2) 수집 항목 : 회사명, 직원수, 이름, 이메일, 연락처, 문의사항</li>
                    <li>(3) 보유 기간 : 수집 및 이용 동의일로부터 12개월</li>
                  </ul>
                </>
              }
            />
            <ToggleBlock
              view={
                <Controller
                  name='terms02'
                  control={control}
                  render={({ field: { ref, onChange, onBlur, value } }) => {
                    return (
                      <Checkbox
                        ref={ref}
                        onChange={(e) => onChange(e.target.checked ? 'true' : 'false')}
                        onBlur={onBlur}
                        defaultChecked={value === 'true'}
                      >
                        <p>
                          마케팅 수신 동의 <span>(선택)</span>
                        </p>
                      </Checkbox>
                    );
                  }}
                />
              }
              contents={
                <>
                  <h5>마케팅 수신 동의 (선택)</h5>
                  <p>
                    본 마케팅 정보 수신에 대한 동의를 거부하실 수 있으며,
                    <br />
                    동의자에 한해 각종 프로모션, 서비스 업데이트 소식 등을 전합니다.
                  </p>
                  <ul>
                    <li>(1) 수집 및 이용목적 : 프로클래스 서비스 마케팅 정보 제공</li>
                    <li>(2) 수집 항목 : 회사명, 이름, 연락처, 이메일</li>
                    <li>(3) 보유 기간 : 수신 동의일로부터 12개월</li>
                  </ul>
                </>
              }
            />
          </div>
          <ErrorMessage>{errors?.terms01?.message}</ErrorMessage>
        </div>
      }
      footer={
        <button type='submit' css={S.submit} onClick={handleSubmit(onSubmit)}>
          문의하기
        </button>
      }
    />
  );
}
