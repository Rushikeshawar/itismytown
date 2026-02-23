import React, { useState } from "react";
import Header from "../components/Header";
import RoleCard from "../components/RoleCard";

const roles = ["Business Owner", "Shopper", "Sender", "Transporter", "Courier"];

const countryData = {
  India:     { prefix: "+91", placeholder: "+91 97854 42580" },
  USA:       { prefix: "+1",  placeholder: "+1 555 123 4567" },
  UK:        { prefix: "+44", placeholder: "+44 7911 123456" },
  Canada:    { prefix: "+1",  placeholder: "+1 416 123 4567" },
  Australia: { prefix: "+61", placeholder: "+61 4 1234 5678" },
  Germany:   { prefix: "+49", placeholder: "+49 170 1234567" },
  France:    { prefix: "+33", placeholder: "+33 6 12 34 56 78" },
};

// Flag SVG components defined at MODULE level
const FlagIndia = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "5.33px", background: "#FF9933" }} />
    <div style={{ position: "absolute", top: "5.33px", left: 0, right: 0, height: "5.34px", background: "#fff" }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5.33px", background: "#138808" }} />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 5, height: 5, borderRadius: "50%", border: "0.67px solid #000080" }} />
  </div>
);
const FlagUSA = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0", background: "#B22234" }}>
    {[0,1,2,3,4,5].map(i => <div key={i} style={{ position: "absolute", left: 0, right: 0, top: i*2.29, height: 1.14, background: "#fff" }} />)}
    <div style={{ position: "absolute", top: 0, left: 0, width: 10, height: 8, background: "#3C3B6E" }} />
  </div>
);
const FlagUK = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0", background: "#012169" }}>
    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 3, transform: "translateY(-50%)", background: "#fff" }} />
    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, transform: "translateX(-50%)", background: "#fff" }} />
    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, transform: "translateY(-50%)", background: "#C8102E" }} />
    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, transform: "translateX(-50%)", background: "#C8102E" }} />
  </div>
);
const FlagCanada = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0", background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 6, background: "#FF0000" }} />
    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 6, background: "#FF0000" }} />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 6, height: 6, background: "#FF0000", clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)" }} />
  </div>
);
const FlagAustralia = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0", background: "#00008B" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: 12, height: 8, background: "#012169" }} />
    <div style={{ position: "absolute", top: 3, left: 0, width: 12, height: 2, background: "#fff" }} />
    <div style={{ position: "absolute", top: 0, left: 5, width: 2, height: 8, background: "#fff" }} />
    <div style={{ position: "absolute", top: 3.5, left: 0, width: 12, height: 1, background: "#C8102E" }} />
    <div style={{ position: "absolute", top: 0, left: 5.5, width: 1, height: 8, background: "#C8102E" }} />
  </div>
);
const FlagGermany = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "5.33px", background: "#000" }} />
    <div style={{ position: "absolute", top: "5.33px", left: 0, right: 0, height: "5.34px", background: "#DD0000" }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5.33px", background: "#FFCE00" }} />
  </div>
);
const FlagFrance = () => (
  <div style={{ width: 24, height: 16, flexShrink: 0, borderRadius: 2, overflow: "hidden", position: "relative", border: "0.5px solid #f0f0f0" }}>
    <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 8, background: "#002395" }} />
    <div style={{ position: "absolute", top: 0, left: 8, bottom: 0, width: 8, background: "#fff" }} />
    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 8, background: "#ED2939" }} />
  </div>
);

const flagMap = {
  India: <FlagIndia />, USA: <FlagUSA />, UK: <FlagUK />,
  Canada: <FlagCanada />, Australia: <FlagAustralia />,
  Germany: <FlagGermany />, France: <FlagFrance />
};

const initialForm = {
  serviceName: "", website: "", address: "", email: "",
  town: "", city: "", state: "", country: "",
  postalCode: "", mobile: "",
  radiusCity: false, radiusState: false,
  extraArea: "", password: "", confirmPassword: "", agreeTerms: false,
};

const font = { fontFamily: "'Inter Tight', sans-serif" };
const GREEN = "#14532d";
const BLUE  = "#285A8C";

// Defined OUTSIDE to avoid remounting on re-render (focus loss bug fix)
function InputField({ label, name, type, placeholder, autoComplete, value, error, onChange, onBlur }) {
  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ color: "#000", fontSize: 14, fontWeight: 400, ...font }}>{label}</div>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete || "off"}
        style={{
          width: "100%", padding: "10px 12px", background: "#fff",
          borderRadius: 8, border: "none",
          outline: `1px solid ${error ? "#ef4444" : "#d1d5db"}`,
          outlineOffset: -1, fontSize: 14, color: "#111827",
          boxSizing: "border-box", ...font,
        }}
      />
      {error && <span style={{ color: "#ef4444", fontSize: 12, ...font }}>{error}</span>}
    </div>
  );
}

export default function CourierRegister() {
  const [form, setForm]       = useState(initialForm);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  function validateField(name, value, currentForm) {
    const f = currentForm || form;
    switch (name) {
      case "serviceName":      return value.trim() ? "" : "Courier Service Name is required.";
      case "website":          return value.trim() ? "" : "Website is required.";
      case "address":          return value.trim() ? "" : "Address is required.";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email.";
        return "";
      case "town":             return value.trim() ? "" : "Town is required.";
      case "city":             return value.trim() ? "" : "City is required.";
      case "state":            return value.trim() ? "" : "State is required.";
      case "country":          return value ? "" : "Please select a country.";
      case "postalCode":
        if (!value.trim()) return "Postal code is required.";
        if (!/^\d{4,10}$/.test(value.trim())) return "Digits only, 4–10 characters.";
        return "";
      case "mobile":
        if (!value.trim()) return "Mobile number is required.";
        if (!/^\d{7,15}$/.test(value.trim())) return "Enter a valid number (digits only).";
        return "";
      case "password":
        if (!value) return "Password is required.";
        if (value.length < 8) return "Must be at least 8 characters.";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password.";
        if (value !== f.password) return "Passwords do not match.";
        return "";
      case "agreeTerms":       return value ? "" : "You must agree to Terms & Conditions.";
      default:                 return "";
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newVal  = type === "checkbox" ? checked : value;
    const newForm = { ...form, [name]: newVal };
    setForm(newForm);
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, newVal, newForm) }));
    }
    if (name === "password" && touched["confirmPassword"]) {
      setErrors(prev => ({ ...prev, confirmPassword: validateField("confirmPassword", newForm.confirmPassword, newForm) }));
    }
  }

  function handleMobileChange(e) {
    const digits = e.target.value.replace(/\D/g, "");
    const newForm = { ...form, mobile: digits };
    setForm(newForm);
    if (touched["mobile"]) {
      setErrors(prev => ({ ...prev, mobile: validateField("mobile", digits, newForm) }));
    }
  }

  function handleBlur(e) {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, val) }));
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setTouched({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const allTouched = {};
    const allErrors  = {};
    Object.keys(initialForm).forEach(key => {
      allTouched[key] = true;
      allErrors[key]  = validateField(key, form[key]);
    });
    if (!form.radiusCity && !form.radiusState) allErrors["service"] = "Select at least one service area.";
    setTouched(allTouched);
    setErrors(allErrors);
    if (!Object.values(allErrors).some(Boolean)) setShowSuccess(true);
  }

  const sel               = countryData[form.country];
  const flagEl            = flagMap[form.country] || <FlagIndia />;
  const mobilePlaceholder = sel ? sel.placeholder : "+91 97854 42580";

  const fp = (name) => ({
    name, value: form[name], error: errors[name],
    onChange: handleChange, onBlur: handleBlur,
  });

  // Responsive two-column row: stacks on mobile
  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      {/* ── Success Modal ── */}
      {showSuccess && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.35)", padding: 16 }}>
          <div style={{ background: "#fff", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%", maxWidth: 420, padding: "40px 36px", boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="18" fill="#14532d" opacity=".12" />
                <path d="M10 18.5l5.5 5.5 10-11" stroke="#14532d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
              <div style={{ color: "#1e293b", fontSize: 20, fontWeight: 600, ...font }}>Form Submitted Successfully!</div>
              <div style={{ color: "#6b7280", fontSize: 14, ...font }}>Your Courier account has been created. We'll review your details shortly.</div>
            </div>
            <button onClick={() => setShowSuccess(false)}
              style={{ width: "100%", padding: "12px 32px", background: BLUE, borderRadius: 8, color: "#fff", fontSize: 16, border: "none", cursor: "pointer", ...font }}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* ── Page Body ── */}
      <div
        className="flex-1 bg-gray-50 flex flex-col items-center"
        style={{ padding: "clamp(24px, 5vw, 80px) clamp(12px, 4vw, 144px)", gap: 36 }}
      >

        {/* Role Cards */}
        <div className="w-full flex justify-center items-stretch gap-2 md:gap-3" style={{ maxWidth: 900 }}>
          {roles.map(role => (
            <RoleCard key={role} role={role} selected={role === "Courier"} onClick={() => {}} />
          ))}
        </div>

        {/* Form Card */}
        <div
          className="w-full bg-white rounded-xl flex flex-col items-center"
          style={{ maxWidth: 706, padding: "clamp(16px, 4vw, 32px)", gap: 28 }}
        >

          <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ color: "#1e293b", fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 600, ...font, textAlign: "center" }}>
              Create Your Courier Account
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Row 1 */}
              <div style={rowStyle}>
                <InputField label="Courier Service Name*" placeholder="Enter your business name" {...fp("serviceName")} />
                <InputField label="Courier Service Website*" placeholder="Enter your website URL" {...fp("website")} />
              </div>

              {/* Row 2 */}
              <div style={rowStyle}>
                <InputField label="Address (Head Office)*" placeholder="Enter your business address" {...fp("address")} />
                <InputField label="Email ID*" type="email" placeholder="Enter your email address" {...fp("email")} />
              </div>

              {/* Row 3 */}
              <div style={rowStyle}>
                <InputField label="Town*" placeholder="Enter your town" {...fp("town")} />
                <InputField label="City*" placeholder="Enter your city" {...fp("city")} />
              </div>

              {/* Row 4: State + Country */}
              <div style={rowStyle}>
                <InputField label="State*" placeholder="Enter your State" {...fp("state")} />
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ color: "#000", fontSize: 14, fontWeight: 400, ...font }}>Country*</div>
                  <div style={{ position: "relative" }}>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "100%", padding: "10px 12px", background: "#fff", borderRadius: 8, border: "none",
                        outline: `1px solid ${errors.country ? "#ef4444" : "#d1d5db"}`, outlineOffset: -1,
                        fontSize: 14, color: form.country ? "#111827" : "#9ca3af", appearance: "none",
                        boxSizing: "border-box", ...font,
                      }}
                    >
                      <option value="">Select your country</option>
                      {Object.keys(countryData).map(c => (
                        <option key={c} value={c} style={{ color: "#111827" }}>{c}</option>
                      ))}
                    </select>
                    <svg style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, pointerEvents: "none" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.country && <span style={{ color: "#ef4444", fontSize: 12, ...font }}>{errors.country}</span>}
                </div>
              </div>

              {/* Row 5: Postal + Mobile */}
              <div style={rowStyle}>
                {/* Postal code */}
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ color: "#000", fontSize: 14, fontWeight: 400, ...font }}>Postal code*</div>
                  <input
                    name="postalCode"
                    value={form.postalCode}
                    onChange={e => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
                      const newForm = { ...form, postalCode: digits };
                      setForm(newForm);
                      if (touched["postalCode"]) setErrors(prev => ({ ...prev, postalCode: validateField("postalCode", digits, newForm) }));
                    }}
                    onBlur={handleBlur}
                    placeholder="395007"
                    inputMode="numeric"
                    maxLength={6}
                    style={{
                      width: "100%", padding: "10px 12px", background: "#fff", borderRadius: 8, border: "none",
                      outline: `1px solid ${errors.postalCode ? "#ef4444" : "#d1d5db"}`, outlineOffset: -1,
                      fontSize: 14, color: "#111827", boxSizing: "border-box", ...font,
                    }}
                  />
                  {errors.postalCode && <span style={{ color: "#ef4444", fontSize: 12, ...font }}>{errors.postalCode}</span>}
                </div>

                {/* Mobile */}
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ color: "#000", fontSize: 14, fontWeight: 400, ...font }}>Mobile No*</div>
                  <div style={{
                    padding: "10px 12px", background: "#fff", borderRadius: 8,
                    outline: `1px solid ${errors.mobile ? "#ef4444" : "#d1d5db"}`, outlineOffset: -1,
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    {flagEl}
                    <input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleMobileChange}
                      onBlur={handleBlur}
                      placeholder={mobilePlaceholder}
                      inputMode="numeric"
                      maxLength={15}
                      style={{ flex: 1, fontSize: 14, color: "#111827", background: "transparent", border: "none", outline: "none", minWidth: 0, ...font }}
                    />
                  </div>
                  {errors.mobile && <span style={{ color: "#ef4444", fontSize: 12, ...font }}>{errors.mobile}</span>}
                </div>
              </div>

              {/* Service Available */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ color: "#000", fontSize: 14, fontWeight: 400, ...font }}>Service Available</div>
                <div style={{ padding: "4px 0", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    <input type="checkbox" name="radiusCity" checked={form.radiusCity} onChange={handleChange}
                      style={{ width: 20, height: 20, accentColor: GREEN, cursor: "pointer" }} />
                    <span style={{ color: "#000", fontSize: 14, ...font }}>City</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    <input type="checkbox" name="radiusState" checked={form.radiusState} onChange={handleChange}
                      style={{ width: 20, height: 20, accentColor: GREEN, cursor: "pointer" }} />
                    <span style={{ color: "#000", fontSize: 14, ...font }}>State</span>
                  </label>
                </div>
                {errors.service && <span style={{ color: "#ef4444", fontSize: 12, ...font }}>{errors.service}</span>}
              </div>

              {/* Extra textarea */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <textarea
                  name="extraArea"
                  value={form.extraArea}
                  onChange={handleChange}
                  placeholder="Additional information (optional)..."
                  rows={3}
                  style={{
                    width: "100%", padding: "10px 12px", background: "#fff", borderRadius: 8,
                    outline: "1px solid #d1d5db", outlineOffset: -1, border: "none",
                    resize: "vertical", fontSize: 14, color: "#111827", boxSizing: "border-box", ...font,
                  }}
                />
              </div>

              {/* Password */}
              <div style={rowStyle}>
                <InputField label="Password*" type="password" placeholder="Create a secure password" autoComplete="new-password" {...fp("password")} />
                <InputField label="Confirm Password*" type="password" placeholder="Re-enter your password" autoComplete="new-password" {...fp("confirmPassword")} />
              </div>

            </div>

            {/* Terms */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} onBlur={handleBlur}
                style={{ width: 20, height: 20, flexShrink: 0, accentColor: GREEN, cursor: "pointer", marginTop: 2 }} />
              <div style={{ flex: 1, ...font }}>
                <span style={{ color: "#000", fontSize: 14 }}>I Agree </span>
                <span style={{ color: GREEN, fontSize: 14, cursor: "pointer" }}>Terms &amp; Conditions</span>
                <span style={{ color: "#000", fontSize: 14 }}> and </span>
                <span style={{ color: GREEN, fontSize: 14, cursor: "pointer" }}>Privacy Policy</span>
              </div>
            </div>
            {errors.agreeTerms && <span style={{ color: "#ef4444", fontSize: 12, marginTop: -16, ...font }}>{errors.agreeTerms}</span>}

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                type="button"
                onClick={handleReset}
                style={{
                  flex: 1, maxWidth: 280, padding: "12px 24px", background: "#fff", borderRadius: 8,
                  outline: `1px solid ${GREEN}`, outlineOffset: -1, border: "none",
                  color: GREEN, fontSize: 16, cursor: "pointer", ...font,
                }}
              >
                Reset
              </button>
              <button
                type="submit"
                style={{
                  flex: 1, maxWidth: 280, padding: "12px 24px", background: BLUE, borderRadius: 8,
                  border: "none", color: "#fff", fontSize: 16, cursor: "pointer", ...font,
                }}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}