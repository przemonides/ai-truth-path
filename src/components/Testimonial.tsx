interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Testimonial = ({ quote, author, company }: TestimonialProps) => {
  return (
    <div className="bg-secondary/30 p-8 rounded-lg border border-border/20">
      <blockquote className="body-large text-foreground mb-4">
        "{quote}"
      </blockquote>
      <cite className="text-muted-foreground font-medium not-italic">
        – {author}, {company}
      </cite>
    </div>
  );
};

export default Testimonial;