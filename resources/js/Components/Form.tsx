import { str } from "@/Helpers/Str";
import { PropsWithRef, ReactNode } from "react";

export function FormInput({
    className = 'col-lg-4 col-md-12', id, name, value, type, label, placeholder, required=false, onChange,
    ...props
}: {className?:string; id?:string; name?:string; value:string|number|readonly string[]|undefined; type?:React.HTMLInputTypeAttribute; label?:string, required?:boolean, placeholder?:string; onChange:(e:React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
        <div className={`${className}`}>
            <div className="form-group">
                <label htmlFor={id||name||str(label||'').toCamel()}>{label||str(name||id||'').toText().ucfirst()}</label>
                <input {...props} value={value} onChange={onChange} type={type} name={name||id||str(label||'').toCamel()} id={id||name||str(label||'').toCamel()} className="form-control with-light" placeholder={placeholder||`Your ${str(label||name||id||'data').toText().toLowerCase()}`} required={required} />
            </div>
        </div>
    )
}

type FormOption = {data:string|number, text?:string|ReactNode, selected?:boolean};

export function FormSelector({
    className = 'col-lg-4 col-md-12', id, name, value, type, label, placeholder, options, required=false, onChange,
    ...props
}:{className?:string; id?:string; name?:string; value:string|number|readonly string[]|undefined; type?:React.HTMLInputTypeAttribute; label?:string, required?:boolean, placeholder?:string, options?:FormOption[]; onChange:(e:React.ChangeEvent<HTMLSelectElement>) => void}) {
    return (
        <div className={`${className}`}>
            <div className="form-group">
                <label htmlFor={id||name||str(label||'').toCamel()}>{label||str(name||id||'').toText().ucfirst()}</label>
                <select {...props} onChange={onChange} value={value} title={label||str(name||id||'').toText().ucfirst()} name={name||id||str(label||'').toSnake()} id={id||name||str(label||'').toSnake()} className="form-control" required={required}>
                    { placeholder &&  <option key={-1} selected>{placeholder}</option> }
                    { options?.map((opt, index) => <option key={index} selected={opt.selected} value={opt.data||opt.text?.toString()}>{opt.text||str(opt.data).toText().ucfirst()}</option>) }
                </select>
            </div>
        </div>
    )
}

export function FormTextArea({
    className = 'col-lg-4 col-md-12', id, name, value, label, placeholder, required=false, onChange,
    ...props
}:{className?:string; id?:string; name?:string; value:string|number|readonly string[]|undefined; label?:string, required?:boolean, placeholder?:string; onChange:(e:React.ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className={`${className}`}>
            <div className="form-group">
                <label htmlFor={id||name||str(label||'').toCamel()}>{label||str(name||id||'').toText().ucfirst()}</label>
                <textarea {...props} onChange={onChange} value={value} name={name||id||str(label||'').toCamel()} id={id||name||str(label||'').toCamel()} className="form-control with-light" placeholder={placeholder||`Your ${str(label||name||id||'data').toText().toLowerCase()}`} required={required} />
            </div>
        </div>
    )
}

export function FormMethod({method = 'post'}:{method:'get'|'post'|'put'|'patch'|'delete'|string}){
    return <input type="hidden" name="_method" value={method.toUpperCase()} />   
}