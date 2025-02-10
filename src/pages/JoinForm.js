import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Ad alanı zorunludur')
    .min(2, 'Ad en az 2 karakter olmalıdır'),
  lastName: yup
    .string()
    .required('Soyad alanı zorunludur')
    .min(2, 'Soyad en az 2 karakter olmalıdır'),
  email: yup
    .string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta alanı zorunludur'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Sadece rakam giriniz')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır')
    .required('Telefon alanı zorunludur'),
  school: yup
    .string()
    .required('Okul alanı zorunludur'),
  department: yup
    .string()
    .required('Bölüm alanı zorunludur'),
  grade: yup
    .string()
    .required('Sınıf alanı zorunludur'),
  interestedArea: yup
    .string()
    .required('İlgi alanı seçimi zorunludur'),
  experience: yup
    .string()
    .min(50, 'En az 50 karakter giriniz'),
  motivation: yup
    .string()
    .min(100, 'En az 100 karakter giriniz'),
});

const grades = ['Hazırlık', '1. Sınıf', '2. Sınıf', '3. Sınıf', '4. Sınıf', 'Yüksek Lisans', 'Doktora'];
const areas = ['Yazılım', 'Elektronik', 'Mekanik', 'Yapay Zeka', 'Robotik', 'Gömülü Sistemler'];

function JoinForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const steps = ['Kişisel Bilgiler', 'Eğitim Bilgileri', 'Deneyim ve Motivasyon'];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      school: '',
      department: '',
      grade: '',
      interestedArea: '',
      experience: '',
      motivation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitError('');
      try {
        // API çağrısı simülasyonu
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form verileri:', values);
        setSubmitSuccess(true);
      } catch (error) {
        setSubmitError('Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleNext = () => {
    let isStepValid = true;
    
    if (activeStep === 0) {
      ['firstName', 'lastName', 'email', 'phone'].forEach(field => {
        if (formik.touched[field] && formik.errors[field]) {
          isStepValid = false;
        }
        formik.setFieldTouched(field, true);
      });
    } else if (activeStep === 1) {
      ['school', 'department', 'grade', 'interestedArea'].forEach(field => {
        if (formik.touched[field] && formik.errors[field]) {
          isStepValid = false;
        }
        formik.setFieldTouched(field, true);
      });
    }

    if (isStepValid) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="firstName"
                label="Ad"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="lastName"
                label="Soyad"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="E-posta"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="phone"
                label="Telefon"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="school"
                label="Okul"
                value={formik.values.school}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.school && Boolean(formik.errors.school)}
                helperText={formik.touched.school && formik.errors.school}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="department"
                label="Bölüm"
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.department && Boolean(formik.errors.department)}
                helperText={formik.touched.department && formik.errors.department}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                name="grade"
                label="Sınıf"
                value={formik.values.grade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.grade && Boolean(formik.errors.grade)}
                helperText={formik.touched.grade && formik.errors.grade}
              >
                {grades.map((grade) => (
                  <MenuItem key={grade} value={grade}>
                    {grade}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                name="interestedArea"
                label="İlgi Alanı"
                value={formik.values.interestedArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.interestedArea && Boolean(formik.errors.interestedArea)}
                helperText={formik.touched.interestedArea && formik.errors.interestedArea}
              >
                {areas.map((area) => (
                  <MenuItem key={area} value={area}>
                    {area}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="text.secondary" gutterBottom>
                Aşağıdaki alanlar isteğe bağlıdır.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="experience"
                label="Deneyimleriniz (İsteğe Bağlı)"
                value={formik.values.experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.experience && Boolean(formik.errors.experience)}
                helperText={
                  (formik.touched.experience && formik.errors.experience) ||
                  "Varsa daha önceki proje, yarışma ve teknik deneyimlerinizden bahsedin"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                name="motivation"
                label="Motivasyon Mektubu (İsteğe Bağlı)"
                value={formik.values.motivation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.motivation && Boolean(formik.errors.motivation)}
                helperText={
                  (formik.touched.motivation && formik.errors.motivation) ||
                  "Neden takımımıza katılmak istediğinizi ve takıma neler katabileceğinizi anlatın"
                }
              />
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  if (submitSuccess) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Başvurunuz Alındı!
          </Typography>
          <Typography paragraph>
            Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
          </Typography>
          <Button
            variant="contained"
            onClick={() => window.location.href = '/'}
          >
            Ana Sayfaya Dön
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Takıma Katılım Formu
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {submitError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {submitError}
          </Alert>
        )}

        <form onSubmit={formik.handleSubmit}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            {activeStep !== 0 && (
              <Button
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Geri
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                startIcon={isSubmitting && <CircularProgress size={20} />}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
              >
                İleri
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default JoinForm; 